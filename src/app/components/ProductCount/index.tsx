import styles from './product-count.module.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "../Button";
import useBuy from '../../hooks/useBuy';

export default function ProductCount() {
  const increase = useBuy((state) => state.increaseNumberOfItem)
  const count = useBuy((state) => state.item.count);

  const decrease = useBuy((state) => state.decreaseNumberOfItem);

  return (
    <div className={styles.countContaner}>
      <Button onClick={() => { decrease(1) }} className={styles.leftButton}>
        <FaMinus className={styles.icon} />
      </Button>
      <span className={styles.itemCount}>
        {count}
      </span>
      <Button onClick={() => { increase(1) }} className={styles.rightButton}>
        <FaPlus className={styles.icon} />
      </Button>
    </div>
  )
}
