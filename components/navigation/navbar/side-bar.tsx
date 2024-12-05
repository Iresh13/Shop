import { Menu } from 'lucide-react'
import Link from 'next/link'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { NavLinks, NavLinkType } from '@/constants/nav-links'

const SideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="size-6 text-primary-800" />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-primary-800">
                <SheetHeader>
                    <SheetTitle className="hidden">ShopCo</SheetTitle>

                    <div className="flex flex-col gap-4">
                        {NavLinks.map((link: NavLinkType) => {
                            return (
                                <SheetClose asChild key={link.title}>
                                    <Link
                                        href={link.link}
                                        className="text-2xl font-semibold text-primary-100"
                                    >
                                        {link.title}
                                    </Link>
                                </SheetClose>
                            )
                        })}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default SideBar
