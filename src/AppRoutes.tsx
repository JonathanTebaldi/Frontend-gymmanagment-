import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login_page";
import { Home } from "./pages/home";

export function AppRoutes() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<LoginPage/>}/>

        </Routes>
      </BrowserRouter>
  </>)
}