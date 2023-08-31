import Image from 'next/image';
import styles from '../styles/components/footerv1.module.scss'
import { Social } from './social';

export function Footer_v1() {
    return  (

<footer className={styles.footer__container}>

<Social />

</footer>

    )
}