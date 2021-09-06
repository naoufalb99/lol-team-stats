import {
    LOADERS_DISABLE_LOADER,
    LOADERS_ENABLE_LOADER,
    LOADERS_RESET,
} from './loaders.types'

const initialState = {
    login: false,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOADERS_ENABLE_LOADER: {
            const { loaderId } = action.payload
            return { ...state, [loaderId]: true }
        }
        case LOADERS_DISABLE_LOADER: {
            const { loaderId } = action.payload
            return { ...state, [loaderId]: false }
        }
        case LOADERS_RESET: {
            return { ...initialState }
        }
        default:
            return state
    }
}

export default reducer
