import RegisterForm from '../../../components/auth/RegisterForm';
import styles from '../../../styles/auth/register.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.pageTitle}>Register</h1>
      <RegisterForm />
    </div>
  );
}
