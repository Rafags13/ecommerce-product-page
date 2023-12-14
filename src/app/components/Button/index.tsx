import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from './button.module.css';

interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
  onClick: () => void,
  children: ReactNode,
  className?: string
}

export default function Button({ onClick, children, className = '' }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
