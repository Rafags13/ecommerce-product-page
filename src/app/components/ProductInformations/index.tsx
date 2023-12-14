import Button from '../Button'
import ProductCount from '../ProductCount'
import cart from '../../../../images/icon-cart.svg';
import styles from './product-informations.module.css'
import useBuy from '../../hooks/useBuy';
import { useAppDispatch } from '../../redux/hooks';
import { addItemInCart } from '../../redux/features/cart/cartSlice';

export default function ProductInformations() {
  const count = useBuy((state) => state.item.count);
  const resetCounter = useBuy((state) => state.resetCounter);
  const dispatch = useAppDispatch();

  return (
    <section className={styles.productInformationsContainer}>
      <h4 className={styles.mark}>SNEAKER COMPANY</h4>
      <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>

      <span className={styles.productDescription}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer solue, they'll withstand everything the weather can offer.</span>

      <article className={styles.pricesContainer}>

        <div className={styles.priceInformationsContainer}>
          <h3 className={styles.priceWithDiscout}>$125.00</h3>
          <span className={styles.discount}>50%</span>
        </div>
        <p className={styles.originalPrice}>$250.00</p>
      </article>

      <article className={styles.buyMenu}>
        <ProductCount />

        <Button onClick={() => {
          if (count > 0) {
            dispatch(addItemInCart({ count, name: "Fall Limited Edition Sneakers", unitaryPrice: 125 }));
            resetCounter();
          }
        }} className={styles.buyButton}>
          <img src={cart} height={20} width={20} className={styles.cartWhite} />

          <span className={styles.buttonCartText}>Add To Cart</span>
        </Button>
      </article>


    </section>
  )
}
