import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StoreProvider from './store/StoreProvider'
import '../styles/app.css'
import { CssBaseline } from '@material-ui/core'
import ROUTES from '../constants/routes'
import PrivateRoutesWrapper from './PrivateRoutesWrapper'

const DefaultLayout = React.lazy(() =>
    import('../components/layouts/DefaultLayout')
)

const Login = React.lazy(() => import('../pages/Login'))

export default function App() {
    return (
        <StoreProvider>
            <CssBaseline />
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login} />

                        <PrivateRoutesWrapper defaultLayout={DefaultLayout}>
                            <Route path={ROUTES.Home}>hello</Route>
                        </PrivateRoutesWrapper>
                    </Switch>
                </Suspense>
            </Router>
        </StoreProvider>
    )
}
