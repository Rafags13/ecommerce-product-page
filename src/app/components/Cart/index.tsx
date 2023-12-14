import { useState } from 'react';
import cart from '../../../../images/icon-cart.svg';
import styles from './cart.module.css';
import Content from './Content';
import Button from '../Button';
import { useAppSelector } from '../../redux/hooks';


export default function Cart() {
  const [openedCart, setOpenedCart] = useState(false);
  const itemsInCart = useAppSelector((state) => state.cart.items.length)

  return (
    <section className={styles.cartContainer}>
      <Button className={styles.button} onClick={() => { setOpenedCart(!openedCart) }}>
        <div>
          {itemsInCart > 0 ? (
            <div className={styles.cartItemsCounting}>{itemsInCart}</div>
          ) : null}
          <img src={cart} height={20} width={20} />
        </div>

      </Button>
      {openedCart ? (
        <Content />
      ) : null}
    </section>
  )
}
