import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { StudentTableComponent } from "../../components/student-table-component";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function ListaTreinos(){
    const navigate = useNavigate();
    const [treinos, setTreinos] = useState<any[]>([]);

    async function listar() {
        try {
            await http.get(`/treino`)
                .then(res => {
                    setTreinos(res.data)
                    console.log(res.data);
                });
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        listar()
    }, [])


    return(
            <PageLayoutComponent title="Treinos">
                <div className="flex flex-col w-full gap-2 px-4 py-2">
                    <div className='flex items-center justify-end w-full'>
                        <Button
                            className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                            onClick={() => {
                                navigate('/treinos/form-treino');
                            }}
                        >
                            <PlusCircle className='size-6' />
                            <p>Cadastro</p>
                        </Button>
                    </div>
                    <StudentTableComponent scrollAreaSize="h-[470px]" alunos={treinos.content} />
                </div>
            </PageLayoutComponent>
        );
}


export default ListaTreinos;