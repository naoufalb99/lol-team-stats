import { createAction } from '../../helpers/actionHelper'
import { LOADERS_DISABLE_LOADER, LOADERS_ENABLE_LOADER } from './loaders.types'

export const enableLoaderAction = (loaderId) =>
    createAction(LOADERS_ENABLE_LOADER, { loaderId })

export const disableLoaderAction = (loaderId) =>
    createAction(LOADERS_DISABLE_LOADER, { loaderId })
