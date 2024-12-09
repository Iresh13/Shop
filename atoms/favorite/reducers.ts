import { Product } from '@/schemas/product-schema'
import { atomWithReducer } from 'jotai/utils'
import { FavoriteAction, FavoriteActions } from './action'
import { StorageKeys } from '@/constants/storage-keys'

const defaultFavoriteState: Product[] = []

const FavoriteReducer = (prev: Product[], action: FavoriteAction) => {
    switch (action.event) {
        case FavoriteActions.setFavoriteProduct:
            return [...prev, action.data]

        case FavoriteActions.removeFavoriteProduct:
            return prev.filter((product) => action.data.id !== product.id)

        default:
            return prev
    }
}

const loadState = (): Product[] => {
    const storedState = localStorage.getItem(StorageKeys.FAVORITES)

    return storedState ? JSON.parse(storedState) : defaultFavoriteState
}

const persistState = (state: Product[]) => {
    localStorage.setItem(StorageKeys.FAVORITES, JSON.stringify(state))
}

export const favoriteReducerAtom = atomWithReducer<Product[], FavoriteAction>(
    loadState(),
    (prev, action: FavoriteAction) => {
        const newState = FavoriteReducer(prev, action)

        persistState(newState)

        return newState
    }
)
