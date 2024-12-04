import React from 'react'
import Image from 'next/image'
import { Cart } from '@/atoms/cart/schema'
import FavButton from '../buttons/fav-button'
import CartCounter from '../buttons/cart-counter'
import RemoveCardButton from '@/app/(app)/product/[id]/component/remove-cart-button'

const CartCard = ({ product }: { product: Cart }) => {
    return (
        <div
            className="flex flex-col items-center gap-4 rounded-lg bg-primary-200 p-4 lg:flex-row"
            aria-label="cart-card"
        >
            <Image
                src={product.images[0].replace(/[\["]/g, '')}
                alt="product-image"
                height={200}
                width={200}
                className="rounded-lg object-cover hover:scale-105"
            />

            <section className="flex flex-1 flex-col gap-6">
                <h2 className="text-3xl font-semibold text-dark-800">
                    {product?.title}
                </h2>

                <div className="flex w-full flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-md font-light text-dark-400">
                            Price:{' '}
                            <span className="text-xl font-medium text-dark-400">
                                ${product?.price}
                            </span>
                        </p>

                        <p className="text-md font-light text-dark-400">
                            Category:{' '}
                            <span className="text-xl font-medium text-dark-400">
                                {product?.category.name}
                            </span>
                        </p>

                        <p className="text-md font-light text-dark-400">
                            Total:{' '}
                            <span className="text-xl font-medium text-dark-400">
                                ${product.price * product.quantity}
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <section className="flex gap-3">
                            <FavButton
                                product={product}
                                styles="min-h-12 bg-dark-500 hover:bg-dark-600"
                            />

                            <CartCounter product={product} />
                        </section>
                        <RemoveCardButton product={product} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartCard
