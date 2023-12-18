import { useEffect, useRef, useState } from "react";
import styles from './lightbox.module.css';
import useModalContext from "../../hooks/useModalContext";
import Image from "../Image";
import Button from "../Button";
import { IoClose } from "react-icons/io5";
import useMediaQuery from "../../hooks/useMediaQuery";

const images: string[] = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];

export default function LightBox() {
  const { modalState, toggle } = useModalContext();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const isMobile = useMediaQuery('(max-width: 500px)')
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (modalState && !isMobile) {
      console.log('abri')
      modalRef?.current?.showModal();
    } else {
      console.log('fechei')
      modalRef?.current?.close();
    }

    return () => {
      setCurrentImage(images[0]);
    }
  }, [modalState, isMobile])


  return (
    <dialog ref={ref => modalRef.current = ref} className={styles.centerLightBox} >
      <Button onClick={() => { toggle(); }} className={styles.closeIcon}>
        <IoClose className={styles.icon} />
      </Button>
      <Image.Root className={styles.rootLightBox}>
        <Image.Arrows sendImageChangeByArrow={(currentIndex: number) => {
          const image = images[currentIndex];
          setCurrentImage(image);
        }}>
          <Image.Display imageSource={currentImage} className={styles.fullImageDisplay} displayOnly />
        </Image.Arrows>
      </Image.Root>
    </dialog>
  )
}
