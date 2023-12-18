import { ItemInCart, removeItemFromCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../Button";
import styles from './cart-card.module.css';
import itemPicture from '../../../../images/image-product-1.jpg';
import { FaTrashAlt } from "react-icons/fa";

export default function CartCard({ name, count, unitaryPrice }: ItemInCart) {
  const dispatch = useAppDispatch();

  return (
    <article className={styles.container}>
      <img src={itemPicture} width={50} />
      <div className={styles.itemInformations}>

        <p>{name}</p>

        <div className={styles.priceContainer}>
          <span className={styles.calculationText}>${(unitaryPrice).toFixed(2)} x {count}</span>
          <span className={styles.finalCalculationText}>${(unitaryPrice * count).toFixed(2)}</span>
        </div>

      </div>
      <Button onClick={() => { dispatch(removeItemFromCart(name)) }}>
        <FaTrashAlt className={styles.icon} />
      </Button>
    </article>
  )
}
