import { z } from 'zod'
import { gameSchema } from './game'
import { pricingPlanSchema } from './pricingPlan'

export const statusSchema = z.enum(['active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'paused', 'trialing', 'unpaid'])

export const organizationPricingPlanSchema = z.object({
  pricingPlan: pricingPlanSchema,
  status: statusSchema,
  endDate: z.string().datetime().nullable(),
  canViewBillingPortal: z.boolean()
})

export const organizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  games: z.array(gameSchema),
  pricingPlan: z.object({
    status: statusSchema
  })
})

export type Organization = z.infer<typeof organizationSchema>
