import { Home, Monitor, Shirt, ShoppingCart, Table } from 'lucide-react'
import { Routes } from './routes'
import { ReactElement } from 'react'

export interface NavLinkType {
    title: string
    link: string
    icon: ReactElement
}

export const NavLinks: NavLinkType[] = [
    {
        title: 'Clothes',
        link: Routes.CLOTHES,
        icon: <Shirt size={28} />,
    },
    {
        title: 'Electronics',
        link: Routes.ELECTRONICS,
        icon: <Monitor size={28} />,
    },
    {
        title: 'Furniture',
        link: Routes.FURNITURE,
        icon: <Table size={28} />,
    },
    {
        title: 'Shoes',
        link: Routes.SHOES,
        icon: <Home size={28} />,
    },
    {
        title: 'Miscellaneous',
        link: Routes.MISCELLANEOUS,
        icon: <Home size={28} />,
    },
]
