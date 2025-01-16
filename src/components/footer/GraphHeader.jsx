import React from 'react'
import styles from '../../styles/footer.module.css';

const GraphHeader = ({onTypeClick}) => {



  return (
    <div className={styles.container_graph_title}>  
            <strong className={styles.text_tit}>월별 소비 그래프</strong>
            <button className={styles.text_income} onClick={()=>onTypeClick('income')} >입금</button>
            <button className={styles.text_expense}onClick={()=>onTypeClick('expense')} >출금</button>
            <button className={styles.text_all} onClick={() => onTypeClick('all')}>전체 </button>
    </div>
  )
}

export default GraphHeader