import React, { useContext, useState } from 'react';
import styles from '../../styles/footer.module.css';
import Modal from '../../layouts/Modal';
import { InputContext } from '../../contexts/InputContext';

const GraphBars = ({ showType }) => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { dataValue } = useContext(InputContext);

  const monthlyData = Array.from({ length: 12 }, () => ({ income: 0, expense: 0 }));

  dataValue.forEach(({ date, type, money }) => {
    const month = parseInt(date.split('-')[1], 10) - 1;
    const amount = parseInt(money, 10);
    if (!isNaN(amount) && month >= 0 && month < 12) {
      if (type === '입금') monthlyData[month].income += amount;
      else if (type === '출금') monthlyData[month].expense += amount;
    }
  });

  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  const openModal = (data, month) => {
    setModalData({ ...data, month: months[month] });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.container_graph}>
        <ul className={styles.container_bar}>
          {monthlyData.map((data, index) => (
            <li key={index} className={styles.bar_container}>
              {showType === 'all' || showType === 'income' ? (
                <div
                  className={styles.income}
                  style={{ height: `${Math.min(data.income / 10000, 4.5)}em`, backgroundColor: '#41AAFF' }}
                  title={`입금: ${data.income.toLocaleString()}`}
                  onClick={() => openModal(data, index)}
                />
              ) : null}
              {showType === 'all' || showType === 'expense' ? (
                <div
                  className={styles.expense}
                  style={{ height: `${Math.min(data.expense / 10000, 4.5)}em`, backgroundColor: '#F07272' }}
                  title={`출금: ${data.expense.toLocaleString()}`}
                  onClick={() => openModal(data, index)}
                />
              ) : null}
              <span className={styles.month_label}>{months[index]}</span>
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalData && (
          <>
            <h2>{modalData.month} 상세 정보</h2>
            <p><strong>입금:</strong> {modalData.income.toLocaleString()}원</p>
            <p><strong>출금:</strong> {modalData.expense.toLocaleString()}원</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default GraphBars;
