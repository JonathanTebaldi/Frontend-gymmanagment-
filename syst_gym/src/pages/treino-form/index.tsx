import { ArrowLeft, CalendarDays, BicepsFlexed } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { useEffect, useState } from "react";
import { http } from "../../service";


function TreinoFormPage() {
    const [treinoData, setTreinoData] = useState();
    const { id } = useParams();

    const navigate = useNavigate();

    async function cadastrar(data: any, treinoId?: string) {
        console.log(data);
        const treinoNovo = {
            nomeExercicio: data.nome,
            descricao: data.descricao,
            series: data.serie,
            musculo: data.musculo
        }
        try {
            if (!treinoId) {
                http.post("/treino", treinoNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                http.put("/treino", treinoNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        } catch (e) {
            console.error(e);
        }
    }

    async function listar() {
        try {
            await http.get(`/treino/${id}`)
                .then(res => {
                    setTreinoData(res.data)
                    console.log(res.data);
                });
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (id != null) {
            listar();
        }
    }, []);

    return (
        <PageLayoutComponent title={id ? "Atualizar treino" : "Cadastro de treino"}>
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
                            Criar novo treino
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-1">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Digite o nome"
                                        onChange={(e) => {
                                            setTreinoData((prev: any) => {
                                                return { ...prev, nome: e.target.value }
                                            });
                                        }} value={treinoData?.nomeExercicio}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Musculo
                                    </label>
                                    <input
                                        type="text"
                                        name="brand"
                                        id="brand"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Digite o musculo"
                                        onChange={(e) => {
                                            setTreinoData((prev: any) => {
                                                return { ...prev, musculo: e.target.value }
                                            });
                                        }} value={treinoData?.musculo}
                                    />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Descricao
                                    </label>
                                    <input
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Digite a descricao"
                                        onChange={(e) => {
                                            setTreinoData((prev: any) => {
                                                return { ...prev, descricao: e.target.value }
                                            });
                                        }} value={treinoData?.descricao}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Séries
                                    </label>
                                    <input
                                        name="price"
                                        id="price"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Digite a quantidade de series"
                                        onChange={(e) => {
                                            setTreinoData((prev: any) => {
                                                return { ...prev, serie: e.target.value }
                                            });
                                        }}
                                        value={treinoData?.series}
                                    />
                                </div>

                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex items-center justify-end'>
                        <Button
                            onClick={() => {
                                    alert("Treino CADASTRADO com sucesso.");
                                cadastrar(treinoData, id);
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


export default TreinoFormPage;