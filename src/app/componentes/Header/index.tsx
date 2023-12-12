import styles from './header.module.css';
import cart from '../../../../images/icon-cart.svg';
import avatar from '../../../../images/image-avatar.png';
import { Link, Outlet } from 'react-router-dom';

type NavItems = {
  route: string;
  label: string;
}

const navLinkItems: NavItems[] = [
  {
    label: 'Collections',
    route: '/collections'
  },
  {
    label: 'Men',
    route: '/men'
  },
  {
    label: 'Women',
    route: '/women'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Contact Us',
    route: '/contact'
  },
];

export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
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
          <img src={cart} height={20} width={20} />
          <img src={avatar} width={50} />
        </div>
      </header>

      <Outlet />
    </>
  )
}
