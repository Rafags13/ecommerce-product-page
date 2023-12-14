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
        <ImageDisplay imageSource={currentImage} alt={'Image product'} className={styles.fullImageDisplay} />
      </ImageTouchable>

      <article className={styles.imageSelectionContainer}>
        {images.map((image) => (
          <ImageTouchable className={styles.touchableMobile} key={image} selectImage={() => { selectImage(image) }} >
            <ImageDisplay className={styles.itemDisplaySelect} imageSource={image} alt={'Image product'} selected={image === currentImage} />
          </ImageTouchable>
        ))}
      </article>
    </section>
  )
}
