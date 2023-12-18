import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './image-touchable.module.css';

interface ImageTouchableProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'className'> {
  selectImage: () => void,
  children: ReactNode,
  className?: string,
}

export default function ImageTouchable({ selectImage, children, className = '', ...props }: ImageTouchableProps) {

  return (
    <div onClick={selectImage} className={`${styles.touchable} ${className}`} {...props}>{children}</div>
  )
}
