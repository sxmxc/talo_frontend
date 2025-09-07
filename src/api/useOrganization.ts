import useSWR from 'swr'
import buildError from '../utils/buildError'
import makeValidatedGetRequest from './makeValidatedGetRequest'
import { z } from 'zod'
import { gameSchema } from '../entities/game'
import { userSchema } from '../entities/user'
import { inviteSchema } from '../entities/invite'

export const currentOrganizationSchema = z.object({
  games: z.array(gameSchema),
  members: z.array(userSchema),
  pendingInvites: z.array(inviteSchema)
})

export default function useOrganization() {
  const fetcher = async ([url]: [string]) => {
    const res = await makeValidatedGetRequest(url, currentOrganizationSchema)

    return res
  }

  const { data, error, mutate } = useSWR(
    ['/organizations/current'],
    fetcher
  )

  return {
    games: data?.games ?? [],
    members: data?.members ?? [],
    pendingInvites: data?.pendingInvites ?? [],
    loading: !data && !error,
    error: error && buildError(error),
    mutate
  }
}
