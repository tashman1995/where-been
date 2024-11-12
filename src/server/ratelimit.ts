import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis"; // see below for cloudflare and fastly adapters

// Create a new ratelimiter, that allows 10 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "100 s"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});
// {
//   "id": 56076833,
//   "username": null,
//   "resource_state": 2,
//   "firstname": "Tom",
//   "lastname": "Ashman",
//   "bio": null,
//   "city": null,
//   "state": null,
//   "country": null,
//   "sex": "M",
//   "premium": false,
//   "summit": false,
//   "created_at": "2020-04-26T10:15:02Z",
//   "updated_at": "2023-08-03T08:31:15Z",
//   "badge_type_id": 0,
//   "weight": null,
//   "profile_medium": "https://lh3.googleusercontent.com/a/ACg8ocJn3BKSZjsBdqpQ4cIvYZU_YG4qGJechRAHhF1NsJ21Xe6HnhME8A=s96-c",
//   "profile": "https://lh3.googleusercontent.com/a/ACg8ocJn3BKSZjsBdqpQ4cIvYZU_YG4qGJechRAHhF1NsJ21Xe6HnhME8A=s96-c",
//   "friend": null,
//   "follower": null
// }