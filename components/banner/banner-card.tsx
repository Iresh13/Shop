import Image from 'next/image'
import React from 'react'

import { Button } from '@/components/ui/button'

export const BannerCard = () => {
    return (
        <div className="primary-gradient relative flex w-full items-center gap-10 p-5 lg:p-20">
            <div className="flex flex-col items-center justify-center gap-10 lg:items-start lg:justify-start">
                <p className="text-center text-4xl font-semibold text-dark-800">
                    New Summer 2024
                </p>
                <h1 className="line-clamp-6 text-center text-6xl font-semibold uppercase leading-normal text-dark-900">
                    Find Clothes That
                    <br /> Matches Your Style
                </h1>
                <p className="caveat-text text-center text-4xl text-dark-800">
                    We know how large objects will act, but things on a small
                    scale.
                </p>

                <Button className="button-primary">Shop Now</Button>
            </div>

            <Image
                src="/shopping.png"
                alt="shopping-image"
                height={450}
                width={550}
                className="mobile-view absolute -bottom-4 -right-5 object-cover"
            />
        </div>
    )
}
