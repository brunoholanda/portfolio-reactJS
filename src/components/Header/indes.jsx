import SocialLinks from "components/SocialLinks";
import styles from './Header.module.scss'
import MenuLinks from "components/LinksMenu";
import MenuMobile from "components/MenuMobile";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__mobile}>
                <MenuMobile />
            </div>
            <div className={styles.header__social}>
                <SocialLinks />
            </div>
            <div className={styles.header__links}>
                <MenuLinks />
            </div>
        </header>
    )
}