'use client'

import { Button } from '@/components/ui/button'
import { Product } from '@/schemas/product-schema'

import { Heart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProductDetails({ product }: { product: Product }) {
    const [selectedImage, setSelectedImage] = useState<number>(0)

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
                        className="rounded-lg object-cover hover:scale-110 lg:h-full lg:w-full"
                    />
                ))}
            </div>

            <section className="flex flex-col gap-10">
                <Image
                    src={product?.images?.[selectedImage].replace(/[\["]/g, '')}
                    alt="product-image"
                    height={600}
                    width={600}
                    className="h-full w-full rounded-lg"
                />

                <section className="flex flex-col gap-10 rounded-lg bg-light-50 p-5">
                    <h2 className="text-center text-4xl font-semibold uppercase text-dark-800">
                        {product?.title}
                    </h2>

                    <p className="text-xl font-medium text-dark-600">
                        {product?.description}
                    </p>

                    <div className="flex items-center justify-between">
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
                        </div>

                        <section className="flex flex-col gap-3 lg:flex-row">
                            <Button
                                size="icon"
                                className="min-h-12 rounded-md border-2 border-dark-400 bg-transparent px-12 py-5 text-lg text-dark-600 shadow-sm hover:bg-primary-500 hover:text-dark-300"
                                aria-label="add_cart"
                            >
                                <Heart className="text-lg" />
                            </Button>

                            <Button
                                className="min-h-12 rounded-md bg-dark-400 px-12 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-500 hover:dark:bg-dark-300"
                                aria-label="add_cart"
                            >
                                Add to cart
                            </Button>
                        </section>
                    </div>
                </section>
            </section>
        </div>
    )
}
