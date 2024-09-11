import { ArrowLeft } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { useNavigate, useParams } from "react-router";
// import { useEffect } from "react";

function AlunoDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (id != null) {
    // Executa função que encontra o aluno pelo id;
    //     }
    // }, []);


    return (
        <PageLayoutComponent title="Dados aluno">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center w-full'>
                    <Button
                        className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <ArrowLeft className='size-6' />
                        <p>Voltar</p>
                    </Button>
                </div>
                <Card className="bg-white dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle className='text-2xl'>
                            ``AQUI VAI O NOME DO ALUNO`` - {id}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        ``DADOS DO ALUNO AQUI``
                    </CardContent>
                    <CardFooter className='flex items-center gap-2 justify-end'>
                        <Button
                            className='bg-red-600 hover:bg-red-700 duration-100'
                            onClick={() => {
                                alert("Aluno EXCLUÍDO com sucesso.");
                                navigate(`/alunos`);
                            }}
                        >
                            Excluir
                        </Button>
                        <Button
                            className="hover:bg-orange-600 duration-100"
                            onClick={() => {
                                navigate(`/alunos/form/${id}`);
                            }}
                        >
                            Editar
                        </Button>
                    </CardFooter>
                </Card>
            </div >
        </PageLayoutComponent >

    );
}

export default AlunoDetailsPage;