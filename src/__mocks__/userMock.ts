import { User, UserType } from '../entities/user'
import organizationMock from './organizationMock'

export default function userMock(extra: Partial<User> = {}): User {
  return {
    id: 1,
    email: 'dev@trytalo.com',
    username: 'dev',
    lastSeenAt: new Date().toISOString(),
    emailConfirmed: false,
    organization: organizationMock(),
    type: UserType.DEV,
    has2fa: false,
    createdAt: new Date().toISOString(),
    ...extra
  }
}
