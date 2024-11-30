"use client";

import { useState } from "react"; // React state yönetimi için
import { useRouter } from "next/navigation"; // Next.js yönlendirme için
import { loginUser } from "../../services/auth/loginService"; // Backend'e istek atan login servisi
import styles from "../../styles/auth/login.module.css"; // Stil dosyası

export default function LoginForm() {
  const [email, setEmail] = useState(""); // Kullanıcının email girişi
  const [password, setPassword] = useState(""); // Kullanıcının şifre girişi
  const [error, setError] = useState(null); // Hata mesajlarını saklar
  const router = useRouter(); // Yönlendirme işlemleri için Next.js router

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Önceki hataları temizler

    try {
      // Giriş için backend'e istek gönder
      const data = await loginUser({ email, password }); // { token, role } döner
      console.log("Login başarılı:", data); // Gelen token'ı logla

      // Token'ı localStorage'a kaydet
      localStorage.setItem("token", data.token);
      console.log("Token başarıyla kaydedildi:", localStorage.getItem("token")); // Kaydedilen token'ı kontrol et

      // Kullanıcıyı role'e göre yönlendir
      if (data.role === "ADMIN") {
        router.push("/dashboard/admin");
      } else if (data.role === "USER") {
        router.push("/dashboard/user");
      } else {
        throw new Error("Yetkisiz kullanıcı rolü");
      }
    } catch (err) {
      console.error("Giriş hatası:", err.message); // Hata mesajını logla
      setError(err.message || "Beklenmeyen bir hata oluştu."); // Hata mesajını göster
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Email input alanı */}
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.formInput}
        />
      </div>

      {/* Password input alanı */}
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.formInput}
        />
      </div>

      {/* Hata mesajını göstermek için */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Form gönderme butonu */}
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
    </form>
  );
}
