import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import paths from '../constants/paths'

function PrivateRoutesWrapper({ children, layout: Layout }) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated)

    if (!isAuthenticated) {
        return <Redirect to={paths.login} />
    }

    return <Layout>{children}</Layout>
}

export default PrivateRoutesWrapper
