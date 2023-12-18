import { ReactNode, useState } from "react";
import Button from "../../Button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from './image-arrows.module.css';

const imagesIndex: number[] = [0, 1, 2, 3];

type ImageArrowsProps = {
  children: ReactNode,
  sendImageChangeByArrow: (currentSelectIndexImage: number) => void,
  isMobile?: boolean
}

export default function ImageArrows({ children, sendImageChangeByArrow, isMobile = false }: ImageArrowsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(imagesIndex[0]);

  const decrease = () => {
    const currentIndex = currentImageIndex === imagesIndex[0] ? currentImageIndex : currentImageIndex - 1;
    setCurrentImageIndex(currentIndex);
    sendImageChangeByArrow(currentIndex);
  }

  const increase = () => {
    const currentIndex = currentImageIndex === imagesIndex[imagesIndex.length - 1] ? currentImageIndex : currentImageIndex + 1
    setCurrentImageIndex(currentIndex);
    sendImageChangeByArrow(currentIndex);
  }

  return (
    <>
      <Button onClick={() => {
        decrease()
      }}
      >
        <IoIosArrowBack className={`
        ${styles.icon}
        ${currentImageIndex === imagesIndex[0] ? styles.disabled : styles.canPass}
        `}
          style={{ marginLeft: isMobile ? '35px' : '' }}
        />
      </Button>
      {children}
      <Button onClick={() => {
        increase()
      }}
      >
        <IoIosArrowForward className={`
        ${styles.icon} 
        ${currentImageIndex === imagesIndex[imagesIndex.length - 1] ? styles.disabled : styles.canPass}
        `}
          style={{ marginRight: isMobile ? '35px' : '' }}
        />
      </Button>
    </>
  )
}
