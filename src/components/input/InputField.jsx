import React, { useContext } from 'react'
import { InputContext } from '../../contexts/InputContext'
import styles from '../../styles/input.module.css'

const InputField = () => {
    const { description, setDescription, money, setMoney } = useContext(InputContext);
    return (
        <>
            <div className={styles.container_description}>
                <label htmlFor="description">내역</label>
                <input
                    type="text"
                    maxLength="20"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className={styles.container_money}>
                <label htmlFor="money">금액</label>
                <input
                    type="number"
                    id="money"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                />
            </div>
        </>
    )
}

export default InputField