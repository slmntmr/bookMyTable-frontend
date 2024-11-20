// src/components/common/ActionButton.js
import styles from "../../styles/reservations/ActionButton.module.css"; // Güncellenmiş stil yolu

export default function ActionButton({ onClick, label, color }) {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
}
