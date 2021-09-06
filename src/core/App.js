import '../styles/app.css'

import { CssBaseline } from '@material-ui/core'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import PrivateRoutesWrapper from './PrivateRoutesWrapper'
import StoreProvider from './store/StoreProvider'

const DefaultLayout = React.lazy(() =>
    import('../components/layouts/DefaultLayout')
)
const Login = React.lazy(() => import('../pages/Login'))
// const NotFound = React.lazy(() => import('../pages/not-found'))
const Memebers = React.lazy(() => import('../pages/memebers'))

export default function App() {
    return (
        <StoreProvider>
            <CssBaseline />
            <Router>
                <Suspense fallback={null}>
                    <Switch>
                        <Route path={paths.login} component={Login} />

                        <PrivateRoutesWrapper layout={DefaultLayout}>
                            <Route path={paths.home}>Home</Route>
                            <Route path={paths.members} component={Memebers} />
                        </PrivateRoutesWrapper>
                    </Switch>
                </Suspense>
            </Router>
        </StoreProvider>
    )
}
