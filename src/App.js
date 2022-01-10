import { GlobalStyle } from "./style";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HabitsPage from "./components/HabitsPage";
import UserContext from "./contexts/UserContext";
import HistoryPage from "./components/HistoryPage";
import TodayPage from "./components/TodayPage";

export default function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [percentage, setPercentage] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, isLoading, setLoading, percentage, setPercentage }}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/cadastro" element={<SignUpPage />}></Route>
                    <Route path="/habitos" element={<HabitsPage />}></Route>
                    <Route path="/hoje" element={<TodayPage />}></Route>
                    <Route path="/historico" element={<HistoryPage />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}