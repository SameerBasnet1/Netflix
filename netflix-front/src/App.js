import React from "react";
import './App.css';
import SignUp from "./components/Pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Pages/SignIn/SignIn";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />}/>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
