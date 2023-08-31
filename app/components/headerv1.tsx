import Image from 'next/image';
import styles from '../styles/components/headerv1.module.scss'
import { Logo_v1 } from '../components/logov1';
import { Button } from '../components/button';
import { SearchBar } from '../components/searchbarv1';


export function Header_v1() {
    return  (

<header className={styles.header__container}>

<div className={styles.header__topcontainer}>

    <div className={styles.logov1}>
    <Logo_v1 />
    </div>
    
    <div className={styles.buttons}>
      <Button name='Connexion' type='btn' color='btn__color-empty'/>
      <Button name='Inscription' type='btn' color='btn__color-orange'/>
    </div>
</div>
<div className={styles.header__bottomcontainer}>
    <SearchBar />
    <Image className={styles.burger} src="/svg/bars-solid.svg" alt="menu burger" width={25} height={25}  />
</div>
</header>

    )
}