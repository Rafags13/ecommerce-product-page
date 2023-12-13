import { Link } from 'react-router-dom';
import { navLinkItems } from '../../../assets/data/navLinkItems';
import styles from './sidenav.module.css';
import { IoClose } from "react-icons/io5";

type SidenavProps = {
  closeSidenav: () => void
}

export default function Sidenav({ closeSidenav }: SidenavProps) {
  return (
    <aside className={styles.sidenavContainer}>
      <button onClick={closeSidenav}>
        <IoClose className={styles.close} />
      </button>
      <ul>
        {navLinkItems.map(({ label, route }) => (
          <Link to={route} key={route}><li className={styles['item-list']}>{label}</li></Link>
        ))}
      </ul>
    </aside>
  )
}
