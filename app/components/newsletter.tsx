import Image from 'next/image';
import styles from '../styles/components/newsletter.module.scss'
import { Button } from '../components/button';


export function Newsletter() {
    return (
        <section className={styles.newsletter__container}>
            <div className={styles.newsletter__text}>
                <p>
                    Inscrivez-vous aux newsletter GameGogs - Restez à la page avec des nouvelles références, articles et plus encore !
                </p>
            </div>
            <form className={styles.newsletter__subcontainer} method="get" action="#">
                <label htmlFor="emailField">E-mail* :
                    <input id="emailField" name="email" type="email" placeholder='Votre adresse mail' required/>
                </label>
                <button type='submit' formAction="#">
                    <Button name='Suscribe' type='btn' color='btn__color-green' />
                </button>
            </form>
        </section>
    )
}