import { Button } from "../../components/ui/button";
import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { StudentTableComponent } from "../../components/student-table-component";
import { useNavigate } from "react-router";

function AlunosPage() {
    const navigate = useNavigate();

    return (
        <PageLayoutComponent title="Alunos">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center justify-end w-full'>
                    <Button
                        className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                        onClick={() => {
                            navigate('form');
                        }}
                    >
                        <PlusCircle className='size-6' />
                        <p>Cadastro</p>
                    </Button>
                </div>
                <StudentTableComponent scrollAreaSize="h-[470px]" />
            </div>
        </PageLayoutComponent>
    );
}

export default AlunosPage;