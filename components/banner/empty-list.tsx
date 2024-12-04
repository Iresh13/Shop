import React from 'react'

const EmptyList = ({ title, message }: { title: string; message: string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-medium text-center font-medium text-primary-500">
                {message}
            </p>
        </div>
    )
}

export default EmptyList
