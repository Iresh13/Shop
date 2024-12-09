import React from 'react'
import { FooterLinks } from './constants/footer-list'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Socials } from './constants/socials'
import { ArrowRight } from 'lucide-react'
import Logo from '../logo'
import FooterBanner from './footer-banner'

const Footer = () => {
    return (
        <div className="flex flex-col bg-primary-100 text-white dark:bg-black-900 dark:text-primary-100">
            <div className="flex flex-col gap-10 p-10 lg:flex-row lg:gap-32">
                {FooterLinks.sections.map((section) => (
                    <div className="flex flex-col gap-5" key={section.title}>
                        <h2 className="text-xl font-semibold text-primary-600">
                            {section.title}
                        </h2>
                        {section.links.map((link) => (
                            <li
                                className="flex flex-col gap-3 text-sm text-primary-500"
                                key={link.url}
                            >
                                {link.name}
                            </li>
                        ))}
                    </div>
                ))}

                <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-semibold text-primary-600">
                        {Socials.section}
                    </h1>
                    {Socials.links.map((link) => (
                        <li
                            className="flex flex-col gap-3 text-sm text-primary-500"
                            key={link.url}
                        >
                            {link.name}
                        </li>
                    ))}
                </div>

                <section className="flex flex-col gap-5">
                    <p className="text-xl font-semibold text-primary-600">
                        Stay in touch
                    </p>

                    <section className="flex flex-col gap-5 xl:flex-row">
                        <Input
                            placeholder="Email"
                            className="no-focus placeholder min-h-12 min-w-full border-2 border-dark-600 text-lg shadow-none dark:border-light-300"
                        />

                        <Button className="min-h-12 rounded-lg bg-dark-700 px-4 py-3 text-lg hover:bg-primary-600">
                            Subscribe
                            <ArrowRight />
                        </Button>
                    </section>

                    <p className="flex flex-col gap-3 text-sm text-primary-500">
                        Sign up for free discount vouchers*
                    </p>
                </section>
            </div>

            <FooterBanner />
        </div>
    )
}

export default Footer
