import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2023 BookMyTable. All rights reserved.</p>
      </div>
    </footer>
  );
}
