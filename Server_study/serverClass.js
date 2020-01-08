'use strict'

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";

// singleton 패턴을 적용하기 위해 class로 apiServer를 만듬
class ApiServer extends http.Server{
    constructor(config){
        const app = express();
        super(app);
        this.config = config;
        // 현재 연결된 유저들을 저장하기 위한 자료구조
        this.currentConns = new Set();
        // 요청중인 작업을 저장하기위한 자료구조
        this.busy = new WeakSet();
        this.stopping = false;
    }
    
    async start() {
        // 미들웨어 추가부분( 미들웨어 간 순서가 중요하다. )
        this.app.use((req, res, next) => {
            this.busy.add(req.socket);
            res.on('finish', () => {
                if(this.stopping) {
                    this.busy.delete(req.socket);
                }
            })
            next();
        })
        this.app.use(helmet());
        this.app.use(cookieParser());
        this.app.use(bodyParser());
        this.app.get('/_health', (req, res) => {
            res.sendStatus(200);
        });
        this.app.use((err, req, res, next) => {
            res.status(500).send(generateApiError('Api::Error'));
        })
        this.on('connection', c => {
            this.currentConns.add(c);
            c.on('close', () => this.currentConns.delete(c));
        })
        return this;
    }

    shutdown() {
        if(this.stopping) return;
        this.stopping = true;
        this.close(() => {
            // 정상적인 종료시도
            process.exit(0);
        });

        // 정상적인 종료불가 시 (이벤트 탈출 & 강제종료)
        setTimeout(() => {
            console.error(`❌  비정상적인 종료 ( 강제 종료 )`);
            process.exit(1);
        }, this.config.shutdownTimeout).unref();

        // 1명 이상이 서버에 접속중일때 -> 무조건적인 서버 종료는 안된다.
        if(this.currentConns.size > 0){
            console.log(`❗  현재 동시접속중인 연결 (${this.currentConns.size})을 대기중입니다.`);
            for(const con of this.currentConns){
                if(!this.busy.has(con)){
                    con.end();
                }
            }
        }
    }
}

const init = async (config={}) => {
    const server = new ApiServer(config);
    return server.start();
}
