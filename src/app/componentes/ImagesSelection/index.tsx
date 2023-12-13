import { useState, useCallback } from 'react';
import ImageDisplay from '../ImageDisplay';
import ImageTouchable from '../ImageTouchable';
import styles from './image-selection.module.css';

const images: string[] = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];

export default function ImagesSelection() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const openImage = useCallback(() => {
    console.log('opening image');
  }, []);

  const selectImage = useCallback((imageFromSelection: string) => {
    setCurrentImage(imageFromSelection);
  }, []);

  return (
    <section className={styles.imageDisplayContainer}>
      <ImageTouchable selectImage={openImage}>
        <ImageDisplay width={500} imageSource={currentImage} alt={'Image product'} />
      </ImageTouchable>

      <article className={styles.imageSelectionContainer}>
        {images.map((image) => (
          <ImageTouchable key={image} selectImage={() => { selectImage(image) }} >
            <ImageDisplay width={100} className={styles.imageDisplay} imageSource={image} alt={'Image product'} selected={image === currentImage} />
          </ImageTouchable>
        ))}
      </article>
    </section>
  )
}
