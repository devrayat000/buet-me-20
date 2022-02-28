import type { LinkProps } from "next/link"

export const links: MyLink[] = [
    {
        href: '/',
        children: 'Home'
    },
    {
        href: '/routine',
        children: 'Routine'
    },
    {
        href: '/todo',
        children: 'ToDo'
    },
]

export interface MyLink {
    href: LinkProps['href'],
    children: React.ReactNode
}