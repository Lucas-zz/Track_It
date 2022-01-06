import { GlobalStyle } from "./style";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";

export default function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage setToken={setToken} setUser={setUser} />}></Route>
                    <Route path="/cadastro" element={<SignUpPage />}></Route>
                    <Route path="/habitos" element={<HabitsPage user={user} />}></Route>
                    {/* {console.log(user)} */}
                </Routes>
            </BrowserRouter>
        </>
    );
}