'use strict'

import RedisCluster from "redis-cluster";
import RedisClient from "redis";
import config from "./config";

let redis, redisSub;
let subCallbacks = new Map();

async function getRedisClient (sub) {
    const conf = await config.getConfig();
    
    if(sub && redisSub) return redisSub;
    if(!sub && redis) return redis;

    const options = {};
    let newClient;

    if(conf.redisUseCluster){
        newClient = new RedisCluster({
            servers: [
                {
                    host: conf.redisHost,
                    port: conf.redisPort
                }
            ],
            createClient: (port, host) => RedisClient.createClient(port, host, options) 
        })
    } else {
        newClient = RedisClient.createClient(conf.redisPort, conf.redisHost, options);
    }
    
}
