import {} from './auth.types'

const initialState = {
    token: undefined,
    isAuthenticated: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer
