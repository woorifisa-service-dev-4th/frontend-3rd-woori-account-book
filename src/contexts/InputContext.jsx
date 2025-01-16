import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const dummyData = [
        { id: 1, date: "2005-01-05", type: "입금", text: "월급", money: 15000 },
        { id: 2, date: "2005-01-15", type: "출금", text: "식비", money: 20000 },
        { id: 3, date: "2005-02-10", type: "입금", text: "보너스", money: 12000 },
        { id: 4, date: "2005-02-25", type: "출금", text: "보험료", money: 350000 },
        { id: 5, date: "2005-03-05", type: "입금", text: "투자 수익", money: 800000 },
        { id: 6, date: "2005-03-20", type: "출금", text: "여행", money: 4500 },
        { id: 7, date: "2005-04-01", type: "입금", text: "알바", money: 6000 },
        { id: 8, date: "2005-04-18", type: "출금", text: "가전제품", money: 5500 },
        { id: 9, date: "2005-05-10", type: "입금", text: "월급", money: 18000 },
        { id: 10, date: "2005-05-20", type: "출금", text: "교육비", money: 3000 },
        { id: 11, date: "2005-06-12", type: "입금", text: "상여금", money: 130000 },
        { id: 12, date: "2005-06-30", type: "출금", text: "쇼핑", money: 2500 },
        { id: 13, date: "2005-07-15", type: "입금", text: "월급", money: 15000 },
        { id: 14, date: "2005-07-25", type: "출금", text: "운동비", money: 40000 },
        { id: 15, date: "2005-08-05", type: "입금", text: "투자 수익", money: 9500 },
        { id: 16, date: "2005-08-15", type: "출금", text: "캠핑", money: 3200 },
        { id: 17, date: "2005-09-10", type: "입금", text: "월급", money: 20000 },
        { id: 18, date: "2005-09-25", type: "출금", text: "선물 구매", money: 450000 },
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
