import styles from './page.module.css';

export default function TextContainer() {
  return (
    <div className={styles.textContainer}>
      <div className={styles.labelContainer}>
        <label className={styles.label}>BY BESKAR</label>
      </div>
      <p className={styles.text}>Comprá Cripto</p>
      <p className={styles.text}>Sin Vueltas.</p>
    </div>
  );
}