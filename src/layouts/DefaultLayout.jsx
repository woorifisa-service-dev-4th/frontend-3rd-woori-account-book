import React from "react";
import styles from "../styles/defaultLayout.module.css";

const DefaultLayout = ({ children }) => {
    return (
        <div className={styles.container}>
            <nav className={styles.layout_left}>
                <div className={styles.layout_left_logo}>
                    <img
                        src="src/assets/logo.png"
                        className={styles.img_logo}
                    />
                    <p className={styles.layout_logo}>우리가계부</p>
                </div>
                <div className={styles.container_left_bar}>
                    <p className={styles.container_home}>HOME</p>
                    <p className={styles.container_table_modal}>TABLE</p>
                </div>
                <dialog id="dialog-1"></dialog>
            </nav>

            <div className={styles.layout_right}>{children}</div>
        </div>
    );
};

export default DefaultLayout;
