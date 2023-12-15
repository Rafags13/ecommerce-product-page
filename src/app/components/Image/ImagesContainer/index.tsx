import React, { useEffect, useState } from 'react'
import ImageTouchable from '../ImageTouchable'
import ImageDisplay from '../../ImageDisplay'

import styles from './images-container.module.css';

type ImagesContainerProps = {
  images: string[],
  selectImage: (image: string) => void,
  currentImageSelected?: string,
}

export default function ImagesContainer({ images, selectImage, currentImageSelected = images[0] }: ImagesContainerProps) {
  const [currentImage, setCurrentImage] = useState(currentImageSelected);

  const updateCurrentImage = (current: string) => {
    setCurrentImage(current);
    selectImage(current);
  }

  useEffect(() => {
    setCurrentImage(currentImageSelected);
  }, [currentImageSelected]);

  return (
    <article className={styles.imageSelectionContainer}>
      {images.map((image) => (
        <ImageTouchable className={styles.touchableMobile} key={image} selectImage={() => { updateCurrentImage(image) }} >
          <ImageDisplay className={styles.itemDisplaySelect} imageSource={image} alt={'Image product'} selected={image === currentImage} />
        </ImageTouchable>
      ))}
    </article>
  )
}
