import React, { useContext, useState } from "react";
import styles from "../../styles/customTable.module.css";
import CustomTableRow from "../table/CustomTableRow";
import { InputContext } from "../../contexts/InputContext";

const CustomTable = () => {
    const { dataValue } = useContext(InputContext);
    const [sortedData, setSortedData] = useState(dataValue); // 초기값은 data로 설정
    const [isSorted, setIsSorted] = useState(false); // 정렬 여부를 추적하는 상태

    // 공통 정렬 함수
    const sortTable = (column, isAscending, isDateSort = false) => {
        const sortedRows = [...dataValue].sort((rowA, rowB) => {
            let valueA = rowA[column];
            let valueB = rowB[column];

            if (isDateSort) {
                // 날짜 데이터의 경우 Date 객체로 변환하여 비교
                valueA = new Date(valueA);
                valueB = new Date(valueB);
            }

            // 오름차순 / 내림차순 비교
            if (isAscending) {
                return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
            } else {
                return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
            }
        });

        setSortedData(sortedRows); // 정렬된 데이터로 업데이트
        setIsSorted(true); // 정렬 상태를 true로 변경
    };

    return (
        <main className={styles.layout_main}>
            <div className={styles.layout_table}>
                <table className={styles.container_table}>
                    <thead>
                        <tr className={styles.container_table_row}>
                            <td className={styles.layout_date}>
                                날짜
                                <button
                                    className={styles.dateAscBtn}
                                    onClick={() =>
                                        sortTable("date", true, true)
                                    }
                                >
                                    🔼
                                </button>
                                <button
                                    className={styles.dateDescBtn}
                                    onClick={() =>
                                        sortTable("date", false, true)
                                    }
                                >
                                    🔽
                                </button>
                            </td>
                            <td className={styles.layout_type}>
                                입금/출금
                                <button
                                    className={styles.typeAscBtn}
                                    onClick={() =>
                                        sortTable("type", true, false)
                                    }
                                >
                                    🔼
                                </button>
                                <button
                                    className={styles.typeDescBtn}
                                    onClick={() =>
                                        sortTable("type", false, false)
                                    }
                                >
                                    🔽
                                </button>
                            </td>
                            <td className={styles.layout_text}>내역</td>
                            <td className={styles.layout_money}>금액</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 정렬된 데이터가 있으면 정렬된 데이터 사용, 아니면 원본 데이터 사용 */}
                        {(isSorted ? sortedData : dataValue).map((data) => (
                            <CustomTableRow key={data.id} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default CustomTable;
