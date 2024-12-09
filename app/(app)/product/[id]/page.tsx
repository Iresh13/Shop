import React from 'react'

import * as http from '@/lib/handlers/http'

import ProductDetails from './component/product-details'

export default async function ProductView({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const { data } = await http.get(`product/${id}`)

    return <ProductDetails product={data} />
}
