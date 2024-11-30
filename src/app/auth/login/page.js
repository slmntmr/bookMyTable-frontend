import LoginForm from "../../../components/auth/LoginForm";
import styles from "../../../styles/auth/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.pageTitle}>Login</h1>
      <LoginForm />
    </div>
  );
}
