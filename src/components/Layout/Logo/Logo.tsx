import clsx from 'clsx';
import styles from './Logo.module.scss'


export type LogoProps = {
    className?: string;
}




export function Logo({className}: LogoProps) {
    return <img src='@/images/logo.png' alt='logo' className={clsx(styles.container, className)} data-testid='Logo' />
}
        

