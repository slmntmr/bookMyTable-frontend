"use client";

import { useState } from "react";
import { registerUser } from "../../services/auth/registerService";
import styles from "../../styles/auth/register.module.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Parola uzunluk doğrulaması (frontend validasyonu)
  const validatePassword = (password) => {
    if (password.length < 6 || password.length > 40) {
      return "Parola en az 6, en fazla 40 karakter olmalıdır.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend'de parola doğrulaması
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setSuccess(null);
      return;
    }

    try {
      const data = await registerUser({ email, password });
      setSuccess(data.message); // Başarı mesajını ayarla
      setError(null); // Hata mesajını temizle
    } catch (err) {
      setError(err.message); // Backend'den gelen hata mesajını ayarla
      setSuccess(null); // Başarı mesajını temizle
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.pageTitle}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        {error && <p className={styles.error}>Hata: {error}</p>}
        {success && <p className={styles.success}>Başarılı: {success}</p>}
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
}
