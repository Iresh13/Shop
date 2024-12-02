import React from 'react'
import ProductDetails from './component/product-details'

export default async function ProductView({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const res = await fetch('http://localhost:3000/api/product/' + id)
    const { data: product } = await res.json()

    return <ProductDetails product={product} />
}
