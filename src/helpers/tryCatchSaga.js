import { put } from '@redux-saga/core/effects'
import { disableLoaderAction, enableLoaderAction } from '../stacks/loaders/loaders.actions'

export default function tryCatchSaga(saga, { loaderId }) {
    return function* (action) {
        try {
            if(loaderId) {
                yield put(enableLoaderAction(loaderId))
            }
            yield saga(action)
        } catch (err) {
            // TODO: alert message
            console.error(err)
        } finally {
            yield put(disableLoaderAction(loaderId))
        }
    }
}
