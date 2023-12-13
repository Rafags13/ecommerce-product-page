import { ReactNode } from "react";
import styles from './image-touchable.module.css';

type ImageTouchableProps = {
  selectImage: () => void,
  children: ReactNode,
}

export default function ImageTouchable({ selectImage, children }: ImageTouchableProps) {

  return (
    <div onClick={selectImage} className={styles.touchable} >{children}</div>
  )
}
