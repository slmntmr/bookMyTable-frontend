"use client";

import { useState } from 'react';
import { login } from '../../services/authService';
import styles from '../../styles/auth/login.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password); // API çağrısı
      console.log('Login successful:', data);
    } catch (err) {
      setError(err.message); // Hata mesajını göster
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.formInput}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.formInput}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <button type="submit" className={styles.submitButton}>Login</button>
    </form>
  );
}
