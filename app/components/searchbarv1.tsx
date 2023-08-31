import Image from 'next/image';
import styles from '../styles/components/searchbarv1.module.scss'

export function SearchBar() {
    return  (
        <form className={styles.searchbar} method="get" action="#" name="searchgg" autoComplete='on' >
            <label htmlFor="searchInGamegogs">
            <input id="searchInGamegogs" name="search" type="search" placeholder='Votre recherche dans GameGogs' />
            </label>
            <button type='submit' formAction="#">
                <Image src="/svg/search-solid.svg" alt="search button" width={20} height={20} />
            </button>
        </form>



    )
}