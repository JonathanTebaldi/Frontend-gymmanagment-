import { BarraDeFerramentas } from "../../components/menu-lateral";
import { LayoutBaseDePagina } from "../../layouts";

export const Dashboard = () =>{

    return(
        <LayoutBaseDePagina
         titulo='Página Inicial' 
         barraDeFerramentas={(
            <BarraDeFerramentas
                mostrarInputBusca
            />
         )}>
            Testando
        </LayoutBaseDePagina>
    );
}