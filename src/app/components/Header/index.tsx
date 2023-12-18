import styles from './header.module.css';

import avatar from '../../../../images/image-avatar.png';
import { Link, Outlet } from 'react-router-dom';
import Cart from '../Cart';
import HamburguerMenu from '../HamburguerMenu';
import { navLinkItems } from '../../../assets/data/navLinkItems';


export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
          <HamburguerMenu />
          <Link to={'/'}>
            <p className={styles.backToTitle}>
              sneackers
            </p>
          </Link>
          <ul className={styles.navigationItemsContainer}>
            {navLinkItems.map(({ label, route }) => (
              <li key={route} className={styles.listItem}>
                <Link to={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.personInformations}>
          <Cart />
          <img src={avatar} width={50} />
        </div>
      </header>

      <Outlet />
    </>
  )
}
