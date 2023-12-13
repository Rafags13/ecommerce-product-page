import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from "react"

import styles from './image-display.module.css';

interface imageDisplayProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> {
  imageSource: string;
  selected?: boolean;
}

export default function ImageDisplay({ imageSource, selected, ...props }: imageDisplayProps) {
  const [image, setImage] = useState();

  useEffect(() => {
    import(`../../../../images/${imageSource}.jpg`).then((item) => {
      setImage(item.default);
    });
  }, [imageSource])

  return (
    <>
      {image ? (
        <img className={styles.image} src={image} width={200} style={{ border: selected ? '3px solid #ff7d1a' : '3px solid transparent' }} {...props} />
      ) : null}
    </>
  )
}
