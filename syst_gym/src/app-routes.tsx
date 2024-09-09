import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import NotFoundPage from "./pages/not-found";
import RegisterPage from "./pages/register";
import AlunosPage from "./pages/alunos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/alunos" element={<AlunosPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
