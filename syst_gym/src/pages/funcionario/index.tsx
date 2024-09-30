
import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { StudentTableComponent } from "../../components/student-table-component";
import { useNavigate } from "react-router";
import { http } from "../../service";
import { useEffect, useState } from "react";
import { FuncionarioTableComponent } from "../../components/funcionario-table-component";

function FuncionariosPage() {
    const navigate = useNavigate();
    const [funcionarios, setFuncionarios] = useState<any[]>([]);

    async function listar() {
        try {
            await http.get(`/funcionario`)
                .then(res => {
                    setFuncionarios(res.data)
                    console.log(res.data);
                });
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        listar()
    }, [])

    return (
        <PageLayoutComponent title="Funcionários">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center justify-end w-full'>
                    <Button
                        className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                        onClick={() => {
                            navigate('/funcionarios-form');
                        }}
                    >
                        <PlusCircle className='size-6' />
                        <p>Cadastro</p>
                    </Button>
                </div>
                <FuncionarioTableComponent scrollAreaSize="h-[470px]" alunos={funcionarios.content} />
            </div>
        </PageLayoutComponent>
    );
}

export default FuncionariosPage;
