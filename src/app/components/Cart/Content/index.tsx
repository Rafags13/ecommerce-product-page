import { CartItem } from '../../../model/dto/CartItem';
import styles from './content.module.css';

type ContentCartProps = CartItem[];

const items: ContentCartProps = []

export default function Content() {
  return (
    <div className={styles.container}>
      <section className={styles.titleContainer}>
        <h3 className={styles.title}>Cart</h3>
      </section>
      <section className={styles.itemsContainer}>
        {items.length === 0 ? (
          <p className={styles.centeredText}>Your card is empty</p>
        ) : (
          <article >
            {items.map((item) => (
              <div id={item.id.toString()}>{item.name}</div>
            ))}
          </article>
        )}
      </section>
    </div>
  )
}
