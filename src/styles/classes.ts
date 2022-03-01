import clsx from "clsx"

import classes from './link.module.scss'


export const drawerLink = 'transition-colors text-inherit btn btn-outline rounded-md w-full'

export const activeLink = 'text-red-600'

export const disclosePurple = 'text-purple-900 bg-purple-100 hover:bg-purple-200 focus-visible:ring-purple-500'
export const disclosePurpleArrow = 'text-purple-500'

export const discloseBlue = 'text-blue-900 bg-blue-100 hover:bg-blue-200 focus-visible:ring-blue-500'
export const discloseBlueArrow = 'text-blue-500'

export const discloseGreen = 'text-green-900 bg-green-100 hover:bg-green-200 focus-visible:ring-green-500'
export const discloseGreenArrow = 'text-green-500'

export const navlinkClass = clsx(
    classes.navlink,
    // anchor styles
    'transition-colors text-inherit relative p-2 text-gray-300 hover:text-red-700',
    // common before-after styles
    'before:absolute before:h-0.5 before:w-full before:bg-red-800 before:scale-x-0 before:transition-transform before:duration-200',
    'after:absolute after:h-0.5 after:w-full after:bg-red-800 after:scale-x-0 after:transition-transform after:duration-200',
    // before specific styles
    'before:left-0 before:top-0 before:origin-top-left',
    // after specific styles
    'after:right-0 after:bottom-0 after:origin-bottom-right',
    // hover styles for both before & after
    'hover:before:scale-x-100 hover:after:scale-x-100'
)