import { ShoppingBag } from 'lucide-react'
import React from 'react'

interface LogoProps {
    styles?: string
}
const Logo = ({ styles }: LogoProps) => {
    return (
        <div className={`flex items-center gap-3 ${styles}`}>
            <ShoppingBag className="size-6 text-primary-800" />
            <h1 className="font-spaceGrotesk text-4xl font-bold text-primary-800">
                ShopCo
            </h1>
        </div>
    )
}

export default Logo
