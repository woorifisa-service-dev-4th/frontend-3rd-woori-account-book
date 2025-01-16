import React from "react";
import Main from "./Main";

const DefaultLayout = ({ children }) => {
    return (
        <div class="container">
            <nav class="layout_left">
                <div class="layout_left_logo">
                    <img src="logo.png" class="img_logo" />
                    <p class="layout_logo">우리가계부</p>
                </div>
                <div class="container_left_bar">
                    <p class="container_home">HOME</p>
                    <p class="container_table_modal">TABLE</p>
                </div>
                <dialog id="dialog-1"></dialog>
            </nav>

            <div className="layout_right">{children}</div>
        </div>
    );
};

export default DefaultLayout;
