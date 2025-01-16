import React, { useContext } from 'react'
import { InputContext } from '../../contexts/InputContext'
import styles from '../../styles/input.module.css'

const TransactionTypeSelect = () => {

    const { transactionType, setTransactionType } = useContext(InputContext);

    const handleSelectChange = (e) => setTransactionType(e.target.value);

    return (
        <div className={styles.container_select}>
            <label htmlFor="select">입금/출금</label>
            <select id="select" className={styles.container_type_slct} value={transactionType} onChange={handleSelectChange}>
                <option value="">입/출금</option>
                <option value="입금">입금</option>
                <option value="출금">출금</option>
            </select>
        </div>
    )
}

export default TransactionTypeSelect