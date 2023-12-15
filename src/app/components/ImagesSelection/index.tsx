import { useState, useCallback, useEffect } from 'react';
import ImageDisplay from '../ImageDisplay';
import ImageTouchable from '../Image/ImageTouchable';
import styles from './image-selection.module.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import Image from '../Image';

type ImagesSelectionProps = {
  images: string[],
  currentImage?: string,
  onClickDisplayImage?: () => void,
}

export default function ImagesSelection({ images, currentImage, onClickDisplayImage = () => { } }: ImagesSelectionProps) {
  const [manageCurrentImage, setManageCurrentImage] = useState(currentImage ?? images[0]);
  const isMobile = useMediaQuery('(max-width: 500px)');

  const selectImage = useCallback((imageFromSelection: string) => {
    setManageCurrentImage(imageFromSelection);
  }, []);

  useEffect(() => {
    if (currentImage) {
      setManageCurrentImage(currentImage);
    }
  }, [currentImage]);

  return (
    <section className={styles.imageDisplayContainer}>
      {isMobile ? (
        <>
          <Image.Root className={styles.root}>
            <Image.Arrows sendImageChangeByArrow={(currentIndexImage: number) => {
              const currentImage = images[currentIndexImage];

              setManageCurrentImage(currentImage);
            }}>
              <Image.Display imageSource={manageCurrentImage} className={styles.imageSize} />
            </Image.Arrows>

          </Image.Root>
        </>
      ) : (
        <>
          <ImageTouchable selectImage={() => {
            onClickDisplayImage();
          }}>
            <ImageDisplay imageSource={manageCurrentImage} alt={'Image product'} className={styles.fullImageDisplay} />
          </ImageTouchable>

          <article className={styles.imageSelectionContainer}>
            {images.map((image) => (
              <ImageTouchable className={styles.touchableMobile} key={image} selectImage={() => { selectImage(image) }} >
                <ImageDisplay className={styles.itemDisplaySelect} imageSource={image} alt={'Image product'} selected={image === manageCurrentImage} />
              </ImageTouchable>
            ))}
          </article>
        </>
      )}



    </section>
  )
}
