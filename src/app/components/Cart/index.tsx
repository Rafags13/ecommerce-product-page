import { useState } from 'react';
import cart from '../../../../images/icon-cart.svg';
import styles from './cart.module.css';
import Content from './Content';
import Button from '../Button';


export default function Cart() {
  const [openedCart, setOpenedCart] = useState(false);
  return (
    <section className={styles.cartContainer}>
      <Button className={styles.button} onClick={() => { setOpenedCart(!openedCart) }}>
        <div>
          <div className={styles.cartItemsCounting}>3</div>
          <img src={cart} height={20} width={20} />
        </div>

      </Button>
      {openedCart ? (
        <Content />
      ) : null}
    </section>
  )
}
