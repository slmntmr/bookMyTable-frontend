import styles from "../../styles/common/modal.module.css";

export default function Modal({ message, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button className={styles.modalButton} onClick={onClose}>
          Tamam
        </button>
      </div>
    </div>
  );
}
