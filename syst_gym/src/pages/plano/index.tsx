import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { useNavigate } from "react-router";
import { http } from "../../service";
import { useEffect, useState } from "react";
import { PlanosTableComponent } from "../../components/plano-table-component";

function PlanosPage() {
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState<any[]>([]);

    async function listarTodos() {
        try {
            await http.get(`/plano`)
                .then(res => {
                    setAlunos(res.data)
                    console.log(res.data);
                });
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        listarTodos()
    }, [])

    return (
        <PageLayoutComponent title="Planos">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center justify-end w-full'>
                    <Button
                        className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                        onClick={() => {
                            navigate('/ planos-form');
                        }}
                    >
                        <PlusCircle className='size-6' />
                        <p>Cadastro</p>
                    </Button>
                </div>
                <PlanosTableComponent scrollAreaSize="h-[470px]" alunos={alunos} />
            </div>
        </PageLayoutComponent>
    );
}

export default PlanosPage;
