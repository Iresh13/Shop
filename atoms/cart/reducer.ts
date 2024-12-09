import { StorageKeys } from '@/constants/storage-keys'
import { CartAction, CartActions } from './action'
import { Cart } from './schema'
import { atomWithReducer } from 'jotai/utils'

export const defaultState: Cart[] = []

export const CartReducer = (prev: Cart[], action: CartAction) => {
    switch (action.event) {
        case CartActions.removeProductCart:
            return prev.filter((item) => item.id !== action.data.id)

        case CartActions.updateProductCart:
            return prev.map((item) =>
                item.id === action.data.id
                    ? { ...item, quantity: action.data.quantity }
                    : item
            )

        case CartActions.setProductCart:
            return [...prev, action.data]

            defaultState: return prev
    }
}

export const loadState = (): Cart[] => {
    const persistState = localStorage.getItem(StorageKeys.CART)

    return persistState ? JSON.parse(persistState) : defaultState
}

export const updateState = (data: Cart[]) => {
    localStorage.setItem(StorageKeys.CART, JSON.stringify(data))
}

export const cartReducerAtom = atomWithReducer<Cart[], CartAction>(
    loadState(),
    (prev, action: CartAction) => {
        const newState = CartReducer(prev, action)

        updateState(newState)

        return newState
    }
)
