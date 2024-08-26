import { FerramentasDaListagem } from "../../components/menu-lateral";
import { FerramentasDeDetalhe } from "../../components/menu-lateral/ferramentas-de-detalhe/FerramentasDeDetalhe";
import { LayoutBaseDePagina } from "../../layouts";

export const Dashboard = () =>{

    return(
        <LayoutBaseDePagina
         titulo='Página Inicial' 
         barraDeFerramentas={(
            <FerramentasDeDetalhe/>
         )}>
            Testando
        </LayoutBaseDePagina>
    );
}