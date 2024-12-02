import React, { ReactNode } from 'react'

const ProductLayout = ({
    filter,
    viewer,
}: {
    filter: ReactNode
    viewer: ReactNode
}) => {
    return (
        <div className="flex w-full py-10 lg:gap-10">
            <div className="max-w-[300px] flex-col lg:visible lg:flex">
                {filter}
            </div>
            <div className="flex w-full flex-col">{viewer}</div>
        </div>
    )
}

export default ProductLayout
