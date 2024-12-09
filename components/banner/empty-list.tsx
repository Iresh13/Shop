import React from 'react'

export const EmptyList = ({
    title,
    message,
}: {
    title: string
    message: string
}) => {
    return (
        <div className="flex min-h-96 w-full flex-col items-center justify-center gap-7">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-center text-lg font-medium text-primary-500">
                {message}
            </p>
        </div>
    )
}
