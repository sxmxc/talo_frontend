import { z } from 'zod'
import { UserType } from './user'
import { organizationSchema } from './organization'

export const inviteSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  organization: organizationSchema,
  type: z.nativeEnum(UserType),
  invitedBy: z.string(),
  createdAt: z.string().datetime()
})

export type Invite = z.infer<typeof inviteSchema>
