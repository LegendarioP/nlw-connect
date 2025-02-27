import { z } from 'zod'

const envSchema = z.object({
  // Server
  PORT: z.coerce.number().default(3333),

  // Database
  DATABASE_URL: z.string(),

  // Redis
  REDIS_URL: z.string().url(),

  // URLs
  API_URL: z.string().url(),
  WEB_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
