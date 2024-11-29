import PageLayout from '@/components/layout/page-layout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center gap-7">
                <h1 className="text-4xl font-semibold">Page not found</h1>
                <p className="text-medium text-center font-medium text-primary-500">
                    We could not find the page you are looking for.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Link
                    className="px-12 py-2.5"
                    data-testid="back_to_home"
                    href="/"
                >
                    <Button
                        className="min-h-12 rounded-md bg-dark-400 px-12 py-5 text-lg text-light-100 shadow-sm hover:bg-dark-500 hover:dark:bg-dark-300"
                        aria-label="return_home"
                    >
                        Return to home
                    </Button>
                </Link>
            </div>
        </PageLayout>
    )
}

export default NotFound
