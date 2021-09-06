import React from 'react'
import { render } from 'react-dom'

import App from './core/App'

const rootElement = document.getElementById('root')

if (rootElement) {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        rootElement
    )
}
