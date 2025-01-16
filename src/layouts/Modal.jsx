import React from 'react';
import styles from '../styles/modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.close_button} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
