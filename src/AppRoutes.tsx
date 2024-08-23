import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login_page";
import { Home } from "./pages/home";
import { MenuLateral } from "./components/menu-lateral/MenuLateral";
import { DrawerProvider, useDrawerContext } from "./contexts/DrawerContext";
import { useEffect } from "react";

export function AppRoutes() {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: 'home',
        path: '/Home'
      },
      {
        label: 'Alunos',
        icon: 'home',
        path: '/Aluno'
      }
    ]);
  },[]);

  return (<>
    <BrowserRouter>
      <DrawerProvider>
        <Routes>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MenuLateral />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </DrawerProvider>
    </BrowserRouter>
  </>)
}