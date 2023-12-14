import { useState } from "react";
import styles from './product-count.module.css';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Button from "../Button";

export default function ProductCount() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(value => value + 1);
  }

  const decrease = () => {
    if (count === 0) { return; }

    setCount(value => value - 1);
  }

  return (
    <div className={styles.countContaner}>
      <Button onClick={decrease} className={styles.leftButton}>
        <FaMinus className={styles.icon} />
      </Button>
      <span className={styles.itemCount}>
        {count}
      </span>
      <Button onClick={increase} className={styles.rightButton}>
        <FaPlus className={styles.icon} />
      </Button>
    </div>
  )
}
