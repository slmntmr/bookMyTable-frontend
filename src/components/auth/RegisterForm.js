// src/components/auth/RegisterForm.js
"use client";

import { useState } from "react";
import { registerUser } from "../../services/auth/registerService";
import styles from "../../styles/auth/register.module.css";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ email, password });
      setSuccess(data.message); // Başarı mesajını ayarla
      setError(null); // Hata mesajını temizle
    } catch (err) {
      setError(err.message); // Hata mesajını ayarla
      setSuccess(null); // Başarı mesajını temizle
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <button type="submit" className={styles.submitButton}>Register</button>
    </form>
  );
}