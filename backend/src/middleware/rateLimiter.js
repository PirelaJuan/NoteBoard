import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next(); 
  } catch (error) {
    console.error("Rate limit error:", error);
    return res.status(500).json({
      message: "Internal server error (rate limiting)",
    });
  }
};

export default rateLimiter;