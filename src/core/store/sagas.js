import { all, fork } from 'redux-saga/effects'
import auth from '../../stacks/auth/auth.sagas'

function* sagas() {
    yield all([fork(auth)])
}

export default sagas
