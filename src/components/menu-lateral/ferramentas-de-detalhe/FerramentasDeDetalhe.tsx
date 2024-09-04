import { Box, Button, Divider, Paper, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon"


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,

}) => {
    const theme = useTheme();
    return (
        <Box
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex" gap={1}
            alignItems="center"
            component={Paper}
        >
            <Button
                variant='contained'
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}
            >Salvar</Button>
            <Button
                variant='outlined'
                color="primary"
                disableElevation
                onClick={aoClicarEmSalvarEFechar}
                startIcon={<Icon>save</Icon>}
            >Salvar e voltar</Button>
            <Button
                variant='contained'
                color="primary"
                disableElevation
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}
            >Apagar</Button>
            <Button
                variant='outlined'
                color="primary"
                disableElevation
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}
            >{textoBotaoNovo}</Button>

            <Divider variant='middle' orientation="vertical" />

            <Button
                variant='outlined'
                color="primary"
                disableElevation
                onClick={aoClicarEmVoltar}
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>

        </Box>
    );
};