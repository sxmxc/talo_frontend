import { selector } from 'recoil'
import userState, { AuthedUser } from './userState'
import { Organization } from '../entities/organization'

const organizationState = selector<Organization>({
  key: 'organization',
  get: ({ get }) => {
    const user = get(userState) as AuthedUser
    return user.organization
  }
})

export default organizationState
