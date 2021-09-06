import { combineReducers } from 'redux'

import authReducer from '../../stacks/auth/auth.reducer'
import loadersReducer from '../../stacks/loaders/loaders.reducer'

const reducers = {
    loaders: loadersReducer,
    auth: authReducer,
}

export default combineReducers(reducers)
