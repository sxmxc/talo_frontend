import useSWR from 'swr'
import buildError from '../utils/buildError'
import makeValidatedGetRequest from './makeValidatedGetRequest'
import { z } from 'zod'
import { organizationPricingPlanSchema } from '../entities/organization'

export default function useOrganizationPricingPlan() {
  const fetcher = async ([url]: [string]) => {
    const res = await makeValidatedGetRequest(url, z.object({
      pricingPlan: organizationPricingPlanSchema
    }))

    return res
  }

  const { data, error } = useSWR(
    ['/billing/organization-plan'],
    fetcher
  )

  return {
    plan: data?.pricingPlan,
    loading: !data && !error,
    error: error && buildError(error)
  }
}
