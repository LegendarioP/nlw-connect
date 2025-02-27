import { redis } from '../redis/client'

interface GetSubscriberInvitesCountParams {
  subscriberId: string
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: GetSubscriberInvitesCountParams) {
  const invites = await redis.zscore('referral:ranking', subscriberId)

  return { count: invites ? Number.parseInt(invites) : 0 }
}
