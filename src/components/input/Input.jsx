import React, { useContext } from 'react'
import DateInput from './DateInput'
import TransactionTypeSelect from './TransactionTypeSelect'
import InputField from './InputField'
import styles from "../../styles/input.module.css";
import { InputContext } from '../../contexts/InputContext';

const Input = () => {

    const { dataValue, setDataValue } = useContext(InputContext); // 상태 추가

    const handleAddDataValue = () => {
        const date = document.getElementById('date').value;
        const type = document.getElementById('select').value;
        const description = document.getElementById('description').value;
        const money = document.getElementById('money').value;
    
        if (!date || !type || !description || !money) {
            console.error('값이 누락되었습니다! 모든 필드를 입력해주세요.');
            return;
        }
    
        const newDataValue = {
            id: dataValue.length + 1,
            date,
            type,
            description,
            money
        };

        setDataValue([...dataValue, newDataValue]);
        console.log('새로 추가된 값:', newDataValue);
        console.log('전체 가계부 내역:', [...dataValue, newDataValue]);

    };
    

    return (
        <header className={styles.layout_header}>
            <DateInput />
            <div className={styles.container_input}>
                <TransactionTypeSelect />
                <InputField />
                <div className={styles.container_add}>
                    <label htmlFor="select">추가</label>
                    <button
                        id="select"
                        className={styles.container_add_btn}
                        onClick={handleAddDataValue} // 버튼 클릭 시 함수 실행
                        >
                        +
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Input