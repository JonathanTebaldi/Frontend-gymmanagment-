import { AccountCircle } from "@mui/icons-material";

export function Cabecalho() {
    return (
        <div className='text-white text-center font-bold absolute top-0 flex items-center py-3 justify-between min-w-full h-12 bg-blue-500 z-50'>
            <h1 className='self-center ml-56 w-full'>
                Pump House
            </h1>

            <AccountCircle className='mr-8' />
        </div>
    )
};