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
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Label } from "../../components/ui/label";
import { useEffect, useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "../../components/ui/select";
import { http } from "../../service";

function AlunoFormPage() {
    const [alunoData, setAlunoData] = useState();
    const [aluno, setAluno] = useState();
    const { id } = useParams();

    const navigate = useNavigate();

    console.log(aluno)
    async function listar() {
        try {
            await http.get(`/aluno/${id}`)
                .then(res => {
                    setAluno(res.data)
                    console.log(res.data);
                });
        } catch (e) {
            console.error(e)
        }
    }

    async function cadastrar(data: any, alunoId?: string) {
        const alunoNovo = {
            nome: data.nome,
            cpf: data.cpf,
            celular: data.celular,
            sexo: data.sexo,
            dataNascimento: new Date(data.dataNascimento).toISOString().split('.')[0],
            endereco: {
                bairro: data.bairro,
                numero: data.numero,
                cidade: data.cidade,
                uf: data.uf
            }
        }
        // console.log(alunoNovo.dataNascimento)
        console.log(alunoNovo)
        try {
            if (!alunoId) {
                http.post("/aluno", alunoNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                http.put("/aluno", alunoNovo)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (id != null) {
            listar();
        }
    }, []);

    return (
        <PageLayoutComponent title={id ? "Atualizar aluno" : "Cadastro aluno"}>
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
                    {id === null ? <></> : <div className="flex items-center w-full justify-end gap-1">
                        <Button
                            className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            <CalendarDays className='size-6' />
                            <p>Frequencia</p>
                        </Button>
                        <MatriculaDialog />
                        <Button
                            className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                            onClick={() => {
                                navigate(`/treino/${id}`);
                            }}
                        >
                            <BicepsFlexed className='size-6' />
                            <p>Treinos</p>
                        </Button>
                    </div>}

                </div>
                <Card className="bg-white dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle>
                            Criar novo aluno
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nome
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, nome: e.target.value }
                                        });
                                    }} value={aluno?.nome} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o nome" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        CPF
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, cpf: e.target.value }
                                        });
                                    }} value={aluno?.cpf} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o cpf" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Celular
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, celular: e.target.value }
                                        });
                                    }} value={aluno?.celular} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o celular" />
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Sexo
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, sexo: e.target.value }
                                        });
                                    }} value={aluno?.sexo} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o sexo" />
                                </div>
                                <div>
                                    <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Data de Nascimento
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, dataNascimento: e.target.value }
                                        });
                                    }} value={aluno?.dataNascimento} name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite a data de nascimento" />
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Bairro
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, bairro: e.target.value }
                                        });
                                    }} value={aluno?.endereco?.bairro} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o bairro" />
                                </div>
                                <div>
                                    <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Numero
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, numero: e.target.value }
                                        });
                                    }} value={aluno?.endereco?.numero} name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o numero" />
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Cidade
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, cidade: e.target.value }
                                        });
                                    }} value={aluno?.endereco?.cidade} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite a cidade" />
                                </div>
                                <div>
                                    <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        UF
                                    </label>
                                    <input onChange={(e) => {
                                        setAlunoData(prev => {
                                            return { ...prev, uf: e.target.value }
                                        });
                                    }} value={aluno?.endereco?.uf} name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite o UF" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex items-center justify-end'>
                        <Button
                            onClick={() => {
                                // alert("Aluno CADASTRADO com sucesso.");
                                // navigate(-1);
                                cadastrar(alunoData, id);
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

export default AlunoFormPage;


function MatriculaDialog() {
    const [initialValue, setInitialValue] = useState<number>(0);

    const navigate = useNavigate();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                >
                    <UserCog />
                    Matrícula
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Nova Matrícula</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <Label htmlFor="value" className="">
                            Escolha a modalidade
                        </Label>
                        <Select
                            onValueChange={(event: any) => {
                                setInitialValue(Number(event));
                            }}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Modalidades" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Modalidades</SelectLabel>
                                    <SelectItem value="1">Musculação</SelectItem>
                                    <SelectItem value="2">MuaiTai</SelectItem>
                                    <SelectItem value="3">Boxe</SelectItem>
                                    <SelectItem value="4">Judô</SelectItem>
                                    <SelectItem value="5">Funcional</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            disabled={initialValue <= 0}
                            onClick={() => {
                                navigate("/pagamento");
                            }}
                        >
                            Ir para pagamento
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}