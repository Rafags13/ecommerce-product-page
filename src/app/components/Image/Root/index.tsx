import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './root.module.css';

interface RootProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'className'> {
  className?: string;
}

export default function Root({ children, className = '', ...props }: RootProps) {
  return (
    <section className={`${styles.imageDisplayContainer} ${className}`} {...props}>{children}</section>
  )
}
