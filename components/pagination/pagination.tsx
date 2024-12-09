'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

import {
    Pagination,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationContent,
    PaginationEllipsis,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { FilterQuery } from '@/constants/filter'
import { formUrlQuery } from '@/lib/url'


interface PaginationProps {
    currentPage: number
    totalPages?: number
    maxVisiblePages?: number
}

export function PaginationComponent({
    currentPage,
    totalPages = 10,
    maxVisiblePages = 5,
}: PaginationProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const getPageNumbers = () => {
        const halfVisible = Math.floor(maxVisiblePages / 2)
        let start = Math.max(1, currentPage - halfVisible)
        const end = Math.min(totalPages, start + maxVisiblePages - 1)

        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, end - maxVisiblePages + 1)
        }

        return Array.from(
            { length: end - start + 1 },
            (_, index) => start + index
        )
    }

    const onPageChange = (page: number) => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: FilterQuery.PAGE,
            value: String(page),
        })

        router.push(newUrl)
    }

    const setPage = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        pageNumber?: number
    ) => {
        e.preventDefault()

        if (pageNumber) {
            return onPageChange(pageNumber)
        }
    }

    const onPrevious = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        if (currentPage > 1) {
            return onPageChange(currentPage - 1)
        }
    }

    const onNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        if (currentPage < totalPages) {
            return onPageChange(currentPage + 1)
        }
    }

    return (
        <Pagination className="flex flex-col items-center lg:items-end">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={onPrevious}
                        className="cursor-pointer text-dark-700 dark:text-light-100"
                    />
                </PaginationItem>

                {getPageNumbers().map((pageNumber) => (
                    <PaginationItem
                        key={pageNumber}
                        className="cursor-pointer border-dark-700"
                    >
                        <PaginationLink
                            isActive={pageNumber === currentPage}
                            onClick={(e) => setPage(e, pageNumber)}
                            className="text-dark-700 dark:text-light-100"
                        >
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {totalPages > maxVisiblePages &&
                    currentPage < totalPages - 1 && (
                        <PaginationItem className="cursor-pointer text-dark-700 dark:text-light-100">
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}

                <PaginationItem>
                    <PaginationNext
                        onClick={onNext}
                        className="cursor-pointer text-dark-700 dark:text-light-100"
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
