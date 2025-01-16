import React from "react";
import Main from "./layouts/Main";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomTable from "./components/CustomTable";
import Footer from "./components/footer/Footer";
import { InputContext, InputProvider } from "./contexts/InputContext";
import Input from "./components/input/Input"

const App = () => {
    const dummyData = [
        { id: 1, date: "2025-01-01", type: "입금", text: "급여", money: "3000000" },
        { id: 2, date: "2025-02-01", type: "출금", text: "식비", money: "50000" },
        { id: 3, date: "2025-02-01", type: "입금", text: "프리랜스 수입", money: "200000" },
        { id: 4, date: "2025-04-01", type: "출금", text: "교통비", money: "30000" },
        { id: 5, date: "2025-05-01", type: "입금", text: "이자 수익", money: "15000" },
        { id: 6, date: "2025-06-01", type: "출금", text: "온라인 쇼핑", money: "70000" },
        { id: 7, date: "2025-04-01", type: "입금", text: "상품 판매", money: "250000" },
        { id: 8, date: "2025-08-01", type: "출금", text: "전기세", money: "40000" },
        { id: 9, date: "2025-09-01", type: "입금", text: "기타 수입", money: "100000" },
        { id: 10, date: "2025-10-01", type: "출금", text: "헬스장 비용", money: "50000" },
        { id: 11, date: "2025-03-01", type: "입금", text: "세금 환급", money: "80000" },
        { id: 12, date: "2025-12-01", type: "출금", text: "영화관람", money: "15000" },
        { id: 13, date: "2025-01-02", type: "입금", text: "주식 배당금", money: "30000" },
        { id: 14, date: "2025-03-02", type: "출금", text: "식료품", money: "100000" },
        { id: 15, date: "2025-02-02", type: "입금", text: "재정상담 수입", money: "500000" },
        { id: 16, date: "2025-04-02", type: "출금", text: "미용실", money: "20000" },
        { id: 17, date: "2025-05-02", type: "입금", text: "기부금", money: "1000000" },
        { id: 18, date: "2025-06-02", type: "출금", text: "외식", money: "80000" },
        { id: 19, date: "2025-07-02", type: "입금", text: "사업 투자", money: "5000000" },
        { id: 20, date: "2025-08-02", type: "출금", text: "렌탈비", money: "120000" },
    ];

    return (
        <>
            <DefaultLayout>
            <InputProvider>
              <Input />
            </InputProvider>
            <Footer data={dummyData}/>
          </DefaultLayout>
      </>
  );
}


export default App