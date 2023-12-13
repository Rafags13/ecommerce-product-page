import { useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidenav from "../Sidenav";
import Backdrop from "../Backdrop";
import styles from './hamburguer-menu.module.css';
import { useLocation } from "react-router-dom";

export default function HamburguerMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeSidenav = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    closeSidenav();

  }, [closeSidenav, location]);

  return (
    <article className={styles.container}>
      <button onClick={() => { setOpen(!open) }} className={styles.buttonMenu}>
        <FiMenu className={styles.menu} />
      </button>
      {open ? (
        <>
          <Sidenav closeSidenav={closeSidenav} />
          <Backdrop clickedOutOfSide={closeSidenav} />
        </>
      ) : null}
    </article>
  )
}
