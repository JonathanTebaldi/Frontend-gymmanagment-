import { ArrowBack } from "@mui/icons-material";
import { MyBackground } from "../../components/my-background";
import { useNavigate, useParams } from "react-router-dom";

export function Matricula() {
    const { id } = useParams();
    const navigate = useNavigate()

    return (
        <MyBackground>
            <div className='text-white flex items-center justify-center w-full'>
                <ArrowBack className='hover:cursor-pointer mr-20' onClick={() => navigate(-1)}/>

                <h1 className='text-3xl font-bold'>Matrícula - {id}</h1>
            </div>

            <div className='size-[500px] bg-slate-300/80 rounded-lg ml-12 mt-10'>
                
            </div>
        </MyBackground>
    );
}