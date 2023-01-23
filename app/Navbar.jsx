import styles from './page.module.css';
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image className={styles.icon} src='./icon.svg' alt='Icono de RAMP' width={30} height={30}/>
      <p className={styles.brandName}>Nombre</p>
      <div className={styles.navButtonContainer}>
        <button className={styles.navButton}>Soporte</button>
        <button className={styles.navButton}>Ir a la app</button>
      </div>
    </div>
  );
}