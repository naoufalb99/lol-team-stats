import { combineReducers } from 'redux'

import loadersReducer from '../../stacks/loaders/loaders.reducer'
import authReducer from '../../stacks/auth/auth.reducer'

const reducers = {
    loaders: loadersReducer,
    auth: authReducer,
}

export default combineReducers(reducers)
