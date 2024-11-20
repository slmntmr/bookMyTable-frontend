import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to BookMyTable</h1>
      <p>Your platform for managing restaurant reservations easily and efficiently.</p>
      <div className={styles.buttonContainer}>
        <Link href="/auth/login">
          <button className={styles.actionButton}>Login</button>
        </Link>
        <Link href="/auth/register">
          <button className={styles.actionButton}>Register</button>
        </Link>
      </div>
    </div>
  );
}
