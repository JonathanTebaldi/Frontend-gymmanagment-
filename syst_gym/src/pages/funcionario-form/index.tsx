import { useNavigate } from "react-router";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { Button } from "../../components/ui/button";
import { ArrowLeft, BicepsFlexed, CalendarDays, UserCog } from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "../../components/ui/card";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { http } from "../../service";

function FuncionarioFormPage() {
    const [funcionarioData, setFuncionarioData] = useState();
    const { id } = useParams();

    const navigate = useNavigate();

    async function listar() {
        try {
            await http.get(`/funcionario/${id}`)
                .then(res => {
                    setFuncionarioData(res.data)
                });
        } catch (e) {
            console.error(e)
        }
    }


    async function cadastrar(data: any, funcionarioId?: string) {
        const funcionarioNovo = {
                nome : data.nome,
                senha : data.senha,
                cargo : data.cargo
            }
        // console.log(alunoNovo.dataNascimento)
        console.log(funcionarioNovo)
        try {
            if (!funcionarioId) {
                http.post("/funcionario", funcionarioNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                http.put("/funcionario", funcionarioNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        } catch (e) {
            console.error(e);
        }
    }


    useEffect(() => {
        console.log(funcionarioData)
        if (id != null) {
            listar();
        }
    }, []);

    return (
        <PageLayoutComponent title={id ? "Atualizar funcionario" : "Cadastrar funcionário"}>
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
                        <CardTitle>
                            Criar novo funcionario
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome
                                    </label>
                                    <input 
                                    onChange={(e) => {
                                        setFuncionarioData((prev: any) => {
                                            return { ...prev, nome: e.target.value }
                                        });
                                    }}
                                    value={funcionarioData?.nome} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o nome" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Senha
                                    </label>
                                    <input 
                                        onChange={(e) => {
                                            setFuncionarioData((prev: any) => {
                                                return { ...prev, senha: e.target.value }
                                            });
                                        }} value={funcionarioData?.senha} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite a senha" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Cargo
                                    </label>
                                    <input 
                                    onChange={(e) => {
                                        setFuncionarioData((prev: any) => {
                                            return { ...prev, cargo: e.target.value }
                                        });
                                    }}
                                    value={funcionarioData?.cargo} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o cargo" />
                                </div> 
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex items-center justify-end'>
                        <Button
                            onClick={() => {
                                cadastrar(funcionarioData, id);
                                alert("Funcionario CADASTRADO com sucesso.");
                                navigate(-1);
                            }}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar'}
                        </Button>
                    </CardFooter>
                </Card>
            </div >
        </PageLayoutComponent>
    );
}

export default FuncionarioFormPage;