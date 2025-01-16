import React from "react";
import Main from "./layouts/Main";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomTable from "./components/CustomTable";

const App = () => {
    const dummyData = [
        {
            id: 1,
            date: "2005-05-01",
            type: "React를 공부한다.",
            text: "TODO",
            money: "1000",
        },
        {
            id: 2,
            date: "2005-05-01",
            type: "React를 공부한다.",
            text: "TODO",
            money: "1000",
        },
        {
            id: 3,
            date: "2005-05-01",
            type: "React를 공부한다.",
            text: "TODO",
            money: "1000",
        },
    ];

    return (
        <>
            <DefaultLayout></DefaultLayout>
        </>
    );
};

export default App;
