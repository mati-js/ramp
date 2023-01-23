import styles from './page.module.css';
import Navbar from './Navbar';
import TextContainer from './TextContainer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <TextContainer />
      </div>
    </main>
  )
}
