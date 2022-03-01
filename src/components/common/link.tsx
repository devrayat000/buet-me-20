import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';
import clsx from 'clsx'

import classes from '../../styles/link.module.scss'
import { activeLink, drawerLink, navlinkClass } from "../../styles/classes";
import { useStoreActions } from "../../store/hooks";

const CustomLink = forwardRef<
    HTMLAnchorElement,
    CustomLinkProps
>((props, ref) => {
    const router = useRouter();
    const set = useStoreActions(store => store.drawer.set)

    const { href, as, prefetch, passHref, replace, scroll, shallow,
        activeClassName = activeLink, className, mobile, ...rest } = props;

    const cls = clsx(className, mobile ? drawerLink : navlinkClass, {
        [activeClassName]: router.asPath === href || router.asPath === as,
    })

    return (
        <Link {...{ href, as, prefetch, passHref, replace, scroll, shallow }}>
            <a ref={ref} {...rest} className={cls} onClick={e => {
                rest.onClick?.call(null, e)
                set(false)
            }}>
                <span>{props.children}</span>
            </a>
        </Link>
    );
});

CustomLink.displayName = 'CustomLink'
export default CustomLink;

export interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {
    activeClassName?: string
    mobile?: boolean
}
