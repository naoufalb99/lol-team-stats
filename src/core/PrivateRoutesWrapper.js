import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import ROUTES from '../constants/routes'

import { selectIsAuthenticated } from '../stacks/auth/auth.selectors'

function PrivateRoutesWrapper({ children }) {
    const isAuthenticated = useSelector(selectIsAuthenticated)

    if (!isAuthenticated) {
        return <Redirect to={ROUTES.Login} />
    }

    return children
}

export default PrivateRoutesWrapper
