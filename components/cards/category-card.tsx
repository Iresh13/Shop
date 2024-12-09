import { Routes } from '@/constants/routes'
import { Category } from '@/schemas/category-schema'
import Link from 'next/link'
import React, { Fragment } from 'react'

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <Link
            href={Routes.CATEGORY(String(category.id))}
            aria-label="category-card"
        >
            {category.image &&
                category.name.toLowerCase() !== 'new category' && (
                    <div
                        className="group relative rounded-lg text-dark-800 transition-transform hover:scale-105 hover:text-light-900"
                        style={{
                            width: 350,
                            height: 400,
                            opacity: '80%',
                            resize: 'both',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${category.image})`,
                        }}
                    >
                        <section className="primary-gradient absolute inset-0 rounded-lg opacity-40 transition-opacity duration-300 group-hover:opacity-0" />

                        <p className="relative z-10 p-10 text-4xl font-medium uppercase opacity-100">
                            {category.name}
                        </p>
                    </div>
                )}
        </Link>
    )
}

export default CategoryCard
