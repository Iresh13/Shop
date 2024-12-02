import { Product } from '@/schemas/product-schema'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { Button } from '../ui/button'
import { Routes } from '@/constants/routes'
import Link from 'next/link'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Fragment>
            {!product.title.toLowerCase().includes('new') &&
                !product.title.toLowerCase().includes('test') && (
                    <div className="flex items-center justify-center rounded-lg">
                        <div className="group h-[550px] w-[350px] [perspective:1000px]">
                            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <section className="absolute flex h-full w-full flex-col rounded-lg bg-gray-200 [backface-visibility:hidden] dark:bg-primary-800">
                                    <Image
                                        src={product.images[0]?.replace(
                                            /[\["]/g,
                                            ''
                                        )}
                                        alt={product.title}
                                        height={400}
                                        width={380}
                                        className="h-full w-full rounded-t-lg object-cover"
                                    />
                                    <div className="flex flex-col items-start gap-4 p-5">
                                        <h2 className="text-xl font-semibold text-dark-800">
                                            {product.title.toUpperCase()}
                                        </h2>
                                        <h4 className="text-xl font-medium text-dark-800">
                                            ${product.price}
                                        </h4>
                                    </div>
                                </section>

                                <section className="text-primary-foreground text-dark800 rotate-y-180 backface-hidden absolute flex h-full w-full flex-col justify-between gap-5 rounded-xl bg-gradient-to-r from-primary-200 to-primary-300 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-2xl font-bold text-dark-950">
                                            {product.title.toUpperCase()}
                                        </h2>
                                        <p className="text-md mt-2 text-dark-700">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xl font-semibold text-dark-700">
                                            ${product.price}
                                        </h4>

                                        <Link
                                            href={Routes.PRODUCT(
                                                String(product.id)
                                            )}
                                        >
                                            <Button className="rounded-md bg-primary-700 px-8 py-5 text-xl text-light-50 hover:bg-primary-600">
                                                Buy Now
                                            </Button>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )}
        </Fragment>
    )
}

export default ProductCard