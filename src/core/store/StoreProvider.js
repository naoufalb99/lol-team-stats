import { Provider } from 'react-redux'

import store from '.'

export default function StoreProvider(props) {
    return <Provider store={store} {...props} />
}
