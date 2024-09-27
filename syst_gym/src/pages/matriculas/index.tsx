import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { StudentTableComponent } from "../../components/student-table-component";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { http } from "../../service";
import { useEffect, useState } from "react";
import { MatriculaTableComponent } from "../../components/matricula-table-component";

function MatriculaPage(){
    const navigate = useNavigate();

    const [alunos, setAlunos] = useState<any[]>([]);

    async function listarTodos() {
        try {
            await http.get(`/aluno/ativo`)
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

    return(
        <PageLayoutComponent title="Matriculas">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center justify-end w-full'>
                </div>
                <MatriculaTableComponent scrollAreaSize="h-[470px]" alunos={alunos.content} />
            </div>
        </PageLayoutComponent>

    );
}

export default MatriculaPage;