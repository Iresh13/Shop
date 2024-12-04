import React from 'react'
import { Button } from '../ui/button'

const CheckoutButton = () => {
    return (
        <Button
            className="min-h-12 rounded-md bg-green-600 px-24 py-5 text-lg text-light-50 shadow-sm hover:bg-green-600"
            aria-label="checkout"
        >
            Checkout
        </Button>
    )
}

export default CheckoutButton
