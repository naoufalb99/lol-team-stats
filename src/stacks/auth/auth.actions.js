import { createAction } from '../../helpers/actionHelper'
import {
    AUTH_LOGIN_ATTEMPT,
    AUTH_LOGIN_FAILDED,
    AUTH_LOGIN_SUCCEEDED,
} from './auth.types'

export const loginAttemptAction = (email, password) =>
    createAction(AUTH_LOGIN_ATTEMPT, { email, password })

export const loginSucceededAction = (token) =>
    createAction(AUTH_LOGIN_SUCCEEDED, { token })

export const loginFaildedAction = (message) =>
    createAction(AUTH_LOGIN_FAILDED, { message })
