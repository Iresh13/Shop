import React from 'react'
import Theme from './theme'
import { ShoppingCart, User } from 'lucide-react'
import SearchBar from '@/components/search-bar/search-bar'
import Link from 'next/link'
import { NavLinks, NavLinkType } from '@/constants/nav-links'
import SideBar from './side-bar'
import Logo from '../logo'
import FavIcon from './components/fav-icon'

const Navbar = () => {
    return (
        <div className="sticky flex w-full flex-col gap-4 border-none bg-primary-50 p-4 dark:bg-black-800">
            <div className="flex items-center justify-between gap-10">
                <Link href="/" className="mobile-view">
                    <Logo />
                </Link>

                <div className="desktop-view">
                    <SideBar />
                </div>

                <div className="mobile-view items-center justify-between gap-8">
                    {NavLinks.map((link: NavLinkType) => {
                        return (
                            <Link href={link.link} key={link.title}>
                                <h3 className="text-xl font-semibold text-primary-600">
                                    {link.title}
                                </h3>
                            </Link>
                        )
                    })}
                </div>

                <div className="mobile-view w-full">
                    <SearchBar />
                </div>

                <section className="flex items-center gap-6">
                    <FavIcon />
                    <Link href="/">
                        <ShoppingCart className="text-primary-600" />
                    </Link>
                    <Link href="/">
                        <User className="text-primary-600" />
                    </Link>
                    <Theme />
                </section>
            </div>

            <div className="desktop-view">
                <SearchBar />
            </div>
        </div>
    )
}

export default Navbar
