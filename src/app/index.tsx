import styles from './app.module.css';
import ImagesSelection from './components/ImagesSelection';
import ProductInformations from './components/ProductInformations';


function App() {
  return (
    <main className={styles.main}>
      <ImagesSelection />

      <ProductInformations />
    </main>
  )
}

export default App
