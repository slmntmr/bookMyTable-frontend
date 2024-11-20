import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.logo}>BookMyTable</h1>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/auth/login">Login</Link></li>
            <li><Link href="/auth/register">Register</Link></li>
            <li><Link href="/dashboard/user">My Reservations</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
