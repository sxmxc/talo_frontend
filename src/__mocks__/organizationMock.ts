import { Organization, statusSchema } from '../entities/organization'

export default function organizationMock(extra: Partial<Organization> = {}): Organization {
  return {
    id: 1,
    name: 'Sleepy Studios',
    games: [],
    pricingPlan: {
      status: statusSchema.enum.active
    },
    ...extra
  }
}
