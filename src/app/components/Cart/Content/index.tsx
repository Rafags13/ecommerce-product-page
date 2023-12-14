import { useAppSelector } from '../../../redux/hooks';
import Button from '../../Button';
import CartCard from '../../CartCard';
import styles from './content.module.css';

export default function Content() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className={styles.container}>
      <section className={styles.titleContainer}>
        <h3 className={styles.title}>Cart</h3>
      </section>
      <section className={styles.itemsContainer}>
        {items.length === 0 ? (
          <p className={styles.centeredText}>Your card is empty</p>
        ) : (
          <>
            <article className={styles.cartList}>
              {items.map((item) => (
                <CartCard {...item} key={item.name.toString()} />
              ))}
            </article>
            <Button onClick={() => { }} className={styles.finishBuyButton}>
              Checkout
            </Button>
          </>
        )}
      </section>
    </div>
  )
}
