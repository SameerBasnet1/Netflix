import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import {useLocation} from "react-router-dom";
import SignUp from "./components/Pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Pages/SignIn/SignIn";
import Profile from "./components/Pages/Profile/Profile";


function App() {
    const location = useLocation();
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/profiles" element={<Profile/>}/>
                </Routes>
            </div>
            {/* Hide Footer on /profile page */}
            {location.pathname !== "/profiles" && <Footer />}
        </>
    );
}

export default App;
