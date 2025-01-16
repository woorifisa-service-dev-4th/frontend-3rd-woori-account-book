import React, { useState, useEffect } from "react";
import Main from "../src/layouts/Main";
import DefaultLayout from "../src/layouts/DefaultLayout";
import CustomTable from "./components/table/CustomTable";
import Footer from "../src/components/footer/Footer";
import { InputContext, InputProvider } from "../src/contexts/InputContext";
import Input from "../src/components/input/Input";

const App = () => {
  

    return (
        <>
            <DefaultLayout>

                <InputProvider>
                    <Input />
                    <Main>
                        <CustomTable />
                    </Main>
                    <Footer />
                </InputProvider>
            </DefaultLayout>
        </>
    );
};

export default App;
