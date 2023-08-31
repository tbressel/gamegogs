"use client";
import styles from '../styles/components/footermenu.module.scss';
import { useState } from 'react';



export function FooterMenu() {
    const [isDisplayClassTop, setDisplayClassTop] = useState(false);
    const [isDisplayClassMiddle, setDisplayClassMiddle] = useState(false);
    const [isDisplayClassBottom, setDisplayClassBottom] = useState(false);


    function switchClassTop() {
        setDisplayClassTop(!isDisplayClassTop)
    }
    function switchClassMiddle() {
        setDisplayClassMiddle(!isDisplayClassMiddle)
    }
    function switchClassBottom() {
        setDisplayClassBottom(!isDisplayClassBottom)
    }


    return (
        <div className={styles.footer__menuContainer}>
            <ul className={styles.footer__menu_ul}>
                <li className={styles.footer__menu_li}>
                    <span onClick={switchClassTop}>A propos de Gamegogs</span>
                    <ul className={`${isDisplayClassTop ? styles.display : styles.hidden}`}>
                        <li>
                            <a href="#">L'histoire de gamegogs</a>
                        </li>
                        <li>
                            <a href="#">Emplois</a>
                        </li>
                        <li>
                            <a href="#">API</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className={styles.footer__menu_ul}>
                <li className={styles.footer__menu_li}>
                    <span onClick={switchClassMiddle}>Voici de l'aide</span>
                    <ul className={`${isDisplayClassMiddle ? styles.display : styles.hidden}`}>
                        <li>
                            <a href="#">Aide & support</a>
                        </li>
                        <li>
                            <a href="#">Laisser une évaluation</a>
                        </li>
                        <li>
                            <a href="#">Raccourcis clavier</a>
                        </li>
                        <li>
                            <a href="#">Guide d'utilisation de la base de données</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className={styles.footer__menu_ul}>
                <li className={styles.footer__menu_li}>
                    <span onClick={switchClassBottom}>Rejoignez-nous</span>
                    <ul className={`${isDisplayClassBottom ? styles.display : styles.hidden}`}>
                        <li>
                            <a href="#">Démarrer</a>
                        </li>
                        <li>
                            <a href="#">S'abonner</a>
                        </li>
                        <li>
                            <a href="#">Revendeurs</a>
                        </li>
                        <li>
                            <a href="#">Contribuer</a>
                        </li>
                        <li>
                            <a href="#">Ajouter une référence</a>
                        </li>
                        <li>
                            <a href="#">Liste des contributeurs</a>
                        </li>
                        <li>
                            <a href="#">Faites de la publicité avec nous</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}



// interface MenuItem {
//     title: string;
//     links: { text: string; href: string }[];
// }

// export function FooterMenu() {
//     const menuItems: MenuItem[] = [
//         {
//             title: "A propos de Gamegogs",
//             links: [
//                 { text: "L'histoire de gamegogs", href: "#" },
//                 { text: "Emplois", href: "#" },
//                 { text: "API", href: "#" },
//             ],
//         },
//         {
//             title: "Voici de l'aide",
//             links: [
//                 { text: "Aide & support", href: "#" },
//                 { text: "Laisser une évaluation", href: "#" },
//                 { text: "Raccourcis clavier", href: "#" },
//                 { text: "Guide d'utilisation de la base de données", href: "#" },
//             ],
//         },
//         {
//             title: "Rejoignez-nous",
//             links: [
//                 { text: "Démarrer", href: "#" },
//                 { text: "S'abonner", href: "#" },
//                 { text: "Contribuer", href: "#" },
//                 { text: "Ajouter une référence", href: "#" },
//                 { text: "Liste des contributeurs", href: "#" },
//                 { text: "Faites de la publicité avec nous", href: "#" },
//             ],
//         },
//     ];

//     const [activeMenus, setActiveMenus] = useState<number[]>([]); // État pour gérer les menus actifs

//     const toggleMenu = (index: number) => {
//         if (activeMenus.includes(index)) {
//             setActiveMenus(activeMenus.filter(item => item !== index));
//         } else {
//             setActiveMenus([...activeMenus, index]);
//         }
//     };

//     return (
//         <div className={styles.footer__menuContainer}>
//             {menuItems.map((menuItem, index) => (
//                 <ul key={index} className={styles.footer__menu_ul}>
//                     <li className={styles.footer__menu_li}>
//                         <span onClick={() => toggleMenu(index)}>{menuItem.title}</span>
//                         <ul className={activeMenus.includes(index) ? styles.display : styles.hidden}>
//                             {menuItem.links.map((link, linkIndex) => (
//                                 <li key={linkIndex}>
//                                     <a href={link.href}>{link.text}</a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </li>
//                 </ul>
//             ))}
//         </div>
//     );
// }