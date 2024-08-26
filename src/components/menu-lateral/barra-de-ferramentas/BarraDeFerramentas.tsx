import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";


interface IBarraDeFerramentasProps{
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
    textoDaBusca = '',
    mostrarInputBusca = false,
    aoMudarTextBusca,
    aoClicarEmNovo,
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true
}) => {
    const theme = useTheme();

    return(
        <Box 
            height={theme.spacing(5)} 
            marginX={1} 
            padding={1} 
            paddingX={2} 
            display="flex" gap={1} 
            alignItems="center" 
            component={Paper}
            >
            
            {mostrarInputBusca && (
                <TextField 
                size="small"
                value={textoDaBusca}
                placeholder="Pesquisar..."
                onChange={(e) => aoMudarTextBusca?.(e.target.value)}
            />
            )}

            <Box flex={1} display="flex" justifyContent="end">
               {mostrarBotaoNovo && (
                 <Button
                 variant='contained'
                 color="primary"
                 disableElevation
                 onClick={aoClicarEmNovo}
                 endIcon={<Icon>add</Icon>}
             >{textoBotaoNovo}</Button>
               )}
            </Box>
        </Box>

    );
}