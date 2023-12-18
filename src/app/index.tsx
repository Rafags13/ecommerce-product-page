import styles from './app.module.css';
import ImagesSelection from './components/ImagesSelection';
import LightBox from './components/LightBox';
import ProductInformations from './components/ProductInformations';
import useModalContext from './hooks/useModalContext';
// import useMediaQuery from './hooks/useMediaQuery';

const images: string[] = ['image-product-1', 'image-product-2', 'image-product-3', 'image-product-4'];

function App() {
  const { toggle } = useModalContext();

  return (
    <main className={styles.main}>
      <ImagesSelection images={images} onClickDisplayImage={() => toggle()} />

      <LightBox />

      <ProductInformations />
    </main>
  )
}

export default App
