import React, { ReactNode } from 'react'

const ProductLayout = ({ children }: { children: ReactNode }) => {
    return <div className="flex w-full flex-col p-10">{children}</div>
}

export default ProductLayout
