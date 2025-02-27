import { eq } from 'drizzle-orm'
import { db } from '../drizzle/client'
import { schema } from '../drizzle/schema'
import { redis } from '../redis/client'

interface SubscribeToEventParams {
  name: string
  email: string
  invitedBySubscriberId: string | null
}

export async function subscribeToEvent({
  name,
  email,
  invitedBySubscriberId,
}: SubscribeToEventParams) {
  const results = await db
    .select()
    .from(schema.subscriptions)
    .where(eq(schema.subscriptions.email, email))

  if (results.length > 0) {
    return { subscriberId: results[0].id }
  }

  const [{ subscriberId }] = await db
    .insert(schema.subscriptions)
    .values({
      name,
      email,
    })
    .returning({
      subscriberId: schema.subscriptions.id,
    })

  if (invitedBySubscriberId) {
    await redis.zincrby('referral:ranking', 1, invitedBySubscriberId)
  }

  return { subscriberId }
}
