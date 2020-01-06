'use strict'

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import static from "serve-static";

// singleton 패턴을 적용하기 위해 class로 apiServer를 만듬
class ApiServer extends http.Server{
    constructor(config){
        const app = express();
        super(app);
        this.config = config;
        this.app.static = static;
    }
    
    async start() {
        this.app.use(helmet());
        this.app.use(cookieParser());
        this.app.use(bodyParser());

        this.app.use(this.app.static(path.join(__dirname, 'dist'), {
            setHeaders: (res, path) => {
                res.setHeaders('Access-Control-Allow-Origin', '*');
                res.setHeaders('Access-Control-Allow-Headers', '*');
                res.setHeaders('Access-Control-Allow-Methods', 'GET');
            }
        }))
    }
}

const init = async (config={}) => {
    const server = new ApiServer(config);
    return server.start();
}
