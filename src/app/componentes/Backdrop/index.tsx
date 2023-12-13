import styles from './backdrop.module.css';

type BackdropProps = {
  clickedOutOfSide: () => void,
}

export default function Backdrop({ clickedOutOfSide }: BackdropProps) {
  return (
    <div onClick={clickedOutOfSide} className={styles.backdrop} />
  )
}
