import { call, takeLeading } from 'redux-saga/effects'
import tryCatchSaga from '../../helpers/tryCatchSaga'
import { loginAttempt } from './auth.services'
import { AUTH_LOGIN_ATTEMPT } from './auth.types'

function* loginAttemptSaga({ payload: { email, password } }) {
    const { token } = yield call(loginAttempt, email, password)
    console.log(token)
}

export default function* watcher() {
    yield takeLeading(
        AUTH_LOGIN_ATTEMPT,
        tryCatchSaga(loginAttemptSaga, { loaderId: 'login' })
    )
}
