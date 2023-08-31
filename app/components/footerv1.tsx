import styles from '../styles/components/footerv1.module.scss'
import { Social } from './social';
import { Logo_v3 } from './logov3';
import { FooterMenu } from './footermenu';
export function Footer_v1() {
    return  (

<footer className={styles.footer__container}>

<Social />
<FooterMenu />
<Logo_v3 />

</footer>

    )
}