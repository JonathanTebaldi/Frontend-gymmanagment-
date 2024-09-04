import { FerramentasDaListagem } from "../../components/menu-lateral";
import { FerramentasDeDetalhe } from "../../components/menu-lateral/ferramentas-de-detalhe/FerramentasDeDetalhe";
import { LayoutBaseDePagina } from "../../layouts/LayoutBaseDePagina";

export const Dashboard = () =>{

    return(
        <LayoutBaseDePagina
         titulo='Página Inicial' 
         barraDeFerramentas={(
            <FerramentasDeDetalhe mostrarBotaoNovo={true}/>
         )}>
            Testando
        </LayoutBaseDePagina>
    );
}