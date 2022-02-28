import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/router';
import clsx from 'clsx'

import classes from '../../styles/link.module.scss'

const CustomLink = forwardRef<
    HTMLAnchorElement,
    CustomLinkProps
>((props, ref) => {
    const router = useRouter();

    const { href, as, prefetch, passHref, replace, scroll, shallow,
        activeClassName, className, ...rest } = props;

    const cls = clsx(className, classes.navlink, {
        [activeClassName ?? 'active']: router.asPath === href || router.asPath === as
    })

    return (
        <Link {...{ href, as, prefetch, passHref, replace, scroll, shallow }}>
            <a ref={ref} {...rest} className={cls}>
                <span>{props.children}</span>
            </a>
        </Link>
    );
});

CustomLink.displayName = 'CustomLink'
export default CustomLink;

export interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {
    activeClassName?: string
}
