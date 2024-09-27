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
import TreinosPage from "./pages/treino";
import CaixaPage from "./pages/caixa";
import MatriculaPage from "./pages/matriculas";
import FrequenciaPage from "./pages/frequencia";
import SuportePage from "./pages/suporte";
import PagamentoPage from "./pages/pagamento";
import ListaTreinos from "./pages/lista-treinos";
import TreinoFormPage from "./pages/treino-form";
import PlanosPage from "./pages/plano";

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

                <Route path="/treino/:id" element={<TreinosPage />} />
                <Route path="/treinos" element={<ListaTreinos />} />
                <Route path="/treinos/form-treino" element={<TreinoFormPage />} />

                <Route path="/planos" element={<PlanosPage />}/>


                <Route path="/caixa" element={<CaixaPage />} />

                <Route path="/matricula" element={<MatriculaPage />} />

                {/* <Route path="/frequencia" element={<FrequenciaPage />} /> */}

                <Route path="/suporte" element={<SuportePage />} />

                <Route path="/pagamento" element={<PagamentoPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
