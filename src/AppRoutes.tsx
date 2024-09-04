import { Alunos} from "./pages/alunos";
import { useEffect } from "react";
import { LoginPage } from "./pages/login_page";
import { MenuLateral } from "./components/menu-lateral/MenuLateral";
import { useDrawerContext } from "./contexts/DrawerContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material";
import { Cabecalho } from "./components/cabecalho";
import { Matricula } from "./pages/matricula";

export function AppRoutes() {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    const theme = useTheme()

    useEffect(() => {
        setDrawerOptions([
            { icon: 'home', path: '/', label: 'Página inicial' },
            { icon: 'location_city', path: 'mensalidade', label: 'Mensalidade' },
            { icon: 'people', path: 'alunos', label: 'Alunos' },
            { icon: 'newspaper', path: 'matriculas', label: 'Matriculas' },
            { icon: 'calendar_month', path: 'frequencia', label: 'Frequência' },
            { icon: '', path: 'funcionario', label: 'Funcionários' },
            { icon: 'turnstile', path: 'catraca', label: 'Catraca' },
        ]);
    }, []);

    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                <Cabecalho />
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<MenuLateral />}>
                            <Route path="alunos" element={<Alunos />} />
                            <Route path="alunos/:id/matricula" element={<Matricula />} />
                            <Route path="mensalidade" element={<h1>Mensalidade</h1>} />
                        </Route>

                        <Route path="*" element={<h1>Not found</h1>} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    )
}