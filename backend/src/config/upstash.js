

import {Ratelimit} from "@upstash/ratelimit";

import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

//create a limiter that allows 10 request per 20 seconds
const ratelimit = new Ratelimit ({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "20 s"),
})

export default ratelimit;