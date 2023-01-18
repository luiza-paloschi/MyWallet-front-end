import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NewEntry from "./pages/NewEntry/NewEntry"
import NewOutflow from "./pages/NewOutflow/NewOutflow"


export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-entrada" element={<NewEntry />} />
            <Route path="/nova-saida" element={<NewOutflow />} />
          </Routes>
    </BrowserRouter>
  )
}