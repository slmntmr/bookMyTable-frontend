// src/app/auth/register/page.js
"use client"; // Bu sayfanın bir Client Component olduğunu belirtir

import RegisterForm from "../../../components/auth/RegisterForm";

export default function RegisterPage() {
  const handleRegister = (formData) => {
    console.log("Form submitted with data:", formData);
    // Burada API çağrısı yapabilirsiniz
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
