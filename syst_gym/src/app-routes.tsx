import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,
    DashboardPage,
    AlunoDetailsPage,
    AlunosPage,
    AlunoFormPage,
    NotFoundPage
} from "./pages";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/alunos" element={<AlunosPage />} />
                <Route path="/alunos/:id" element={<AlunoDetailsPage />} />
                <Route path="/alunos/form" element={<AlunoFormPage />} />
                <Route path="/alunos/form/:id" element={<AlunoFormPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
