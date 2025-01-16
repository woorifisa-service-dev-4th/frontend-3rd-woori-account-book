import React from "react";
import styles from "../../styles/customTableRow.module.css";

const CustomTableRow = ({ data }) => {
    // console.log(data);

    return (
        <>
            <tr className={styles.container_table_contents}>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>{data.text}</td>
                <td>{data.money}</td>
            </tr>
        </>
    );
};

export default CustomTableRow;
