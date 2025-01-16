import React, { useContext } from 'react'
import { InputContext } from '../../contexts/InputContext'
import styles from '../../styles/input.module.css'

const DateInput = () => {

    const { date, setDate } = useContext(InputContext);
    const handleDateChange = (e) => setDate(e.target.value);

    return (
      <div className={styles.container_entry_date}>
          <input
                type="date"
                id="date"
                max="2025-06-17"
                min="2024-12-30"
                value={date}
                onChange={handleDateChange}
          />
          <span className={styles.container_headerfont}>의 잔고</span>
      </div>
    )
}

export default DateInput