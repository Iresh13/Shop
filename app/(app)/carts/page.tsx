import { Fragment } from 'react'
import CartList from './component/cart-list'

export default function Favorites() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-5">
            <h2 className="p-10 text-center text-4xl font-medium uppercase text-dark-800 opacity-100 dark:text-light-200">
                Your Cart
            </h2>

            <CartList />
        </div>
    )
}
