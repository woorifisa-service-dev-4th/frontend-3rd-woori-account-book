import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const dummyData = [
        {
            id: 1,
            date: "2005-05-01",
            type: "입금",
            text: "TODO",
            money: "500000",
        },
        {
            id: 2,
            date: "2005-05-01",
            type: "출금",
            text: "TODO",
            money: "300000",
        },
        {
            id: 3,
            date: "2005-05-01",
            type: "입금",
            text: "TODO",
            money: "100000",
        },
    ];

    const [dataValue, setDataValue] = useState(dummyData);
    const [date, setDate] = useState("2025-01-16");
    const [transactionType, setTransactionType] = useState("입/출금");
    const [description, setDescription] = useState("");
    const [money, setMoney] = useState("");

    const contextValue = {
        dataValue,
        setDataValue,
        date,
        setDate,
        transactionType,
        setTransactionType,
        description,
        setDescription,
        money,
        setMoney,
    };

    return (
        <InputContext.Provider value={contextValue}>
            {children}
        </InputContext.Provider>
    );
};
