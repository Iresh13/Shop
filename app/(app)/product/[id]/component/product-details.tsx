'use client'

import { useAtomValue } from 'jotai/react'
import Image from 'next/image'
import React, { useState } from 'react'

import { cartReducerAtom } from '@/atoms/cart/reducer'
import { CartCounter } from '@/components/buttons/cart-counter'
import { FavButton } from '@/components/buttons/fav-button'
import { Product } from '@/schemas/product-schema'

import AddToCartButton from './add-cart-button'

export default function ProductDetails({ product }: { product: Product }) {
    const [selectedImage, setSelectedImage] = useState<number>(0)

    const carts = useAtomValue(cartReducerAtom)

    const isAddedToCart = carts.some((c) => c.id === product.id)

    return (
        <div className="flex w-full flex-col gap-10 lg:flex-row">
            <div className="col-span-3 grid grid-flow-col gap-10 overflow-scroll lg:row-span-1 lg:min-w-[250px] lg:grid-flow-row">
                {product?.images?.map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        src={image?.replace(/[\["]/g, '')}
                        alt="product-image"
                        height={400}
                        width={400}
                        className="rounded-lg object-cover hover:scale-110 lg:size-full"
                    />
                ))}
            </div>

            <section className="flex flex-col gap-10">
                <Image
                    src={product?.images?.[selectedImage].replace(/[\["]/g, '')}
                    alt="product-image"
                    height={600}
                    width={600}
                    className="size-full rounded-lg"
                />

                <section className="flex flex-col gap-10 rounded-lg bg-light-50 p-5">
                    <h2 className="text-center text-4xl font-semibold uppercase text-dark-800">
                        {product?.title}
                    </h2>

                    <p className="text-xl font-medium text-dark-600">
                        {product?.description}
                    </p>

                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                        <div className="flex flex-col gap-2">
                            <p className="font-light text-dark-400">
                                Price:{' '}
                                <span className="text-xl font-medium text-dark-400">
                                    ${product?.price}
                                </span>
                            </p>

                            <p className="font-light text-dark-400">
                                Category:{' '}
                                <span className="text-xl font-medium text-dark-400">
                                    {product?.category.name}
                                </span>
                            </p>
                        </div>

                        <section className="flex flex-col gap-3 lg:flex-row">
                            <FavButton
                                product={product}
                                styles="min-h-12 bg-dark-500 hover:bg-dark-600"
                            />

                            {isAddedToCart && <CartCounter product={product} />}
                            {!isAddedToCart && (
                                <AddToCartButton product={product} />
                            )}
                        </section>
                    </div>
                </section>
            </section>
        </div>
    )
}
