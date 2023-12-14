import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from "react"

import styles from './image-display.module.css';

interface imageDisplayProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'className'> {
  imageSource: string;
  selected?: boolean;
  className?: string;
}

export default function ImageDisplay({ imageSource, selected, className = '', ...props }: imageDisplayProps) {
  const [image, setImage] = useState();

  useEffect(() => {
    import(`../../../../images/${imageSource}.jpg`).then((item) => {
      setImage(item.default);
    });
  }, [imageSource])

  return (
    <>
      {image ? (
        <img className={`${styles.image} ${className}`} src={image} style={{ border: selected ? '3px solid #ff7d1a' : '3px solid transparent', opacity: selected ? '0.5' : '' }} {...props} />
      ) : null}
    </>
  )
}
