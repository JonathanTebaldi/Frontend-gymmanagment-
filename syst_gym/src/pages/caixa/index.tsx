import { ArrowLeft, CircleDollarSign } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogClose } from "../../components/ui/dialog";
import { useEffect, useState } from "react";
import { http } from "../../service";

function CaixaPage() {
    const [update, setUpdate] = useState<boolean>(false);
    const [caixa, setCaixa] = useState({
        id: '',
        pagamento: null,
        saldoAtual: 0,
        valorFinal: 0,
        valorInicial: 0,
        dataAbertura: null,
        dataFechamento: null
    });
    const { id } = useParams();
    const navigate = useNavigate();

    async function getCaixaAtual() {
        try {
            await http.get('/caixa/atual')
                .then(res => {
                    console.log('caixa atual> ', res.data)
                    setCaixa(res.data);
                })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCaixaAtual()
    }, [update]);

    return (
        <PageLayoutComponent title={id ? "Caixa" : "Caixa"}>
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
                    <div className="flex items-center w-full justify-end gap-1">
                        <CaixaDialog setCaixa={setCaixa} />
                        <SuprirDialog caixaId={caixa.id} update={update} setUpdate={setUpdate} />
                        <Button
                            className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            <CircleDollarSign className='size-6' />
                            <p>Retirada do caixa</p>
                        </Button>
                    </div>
                </div>
                <Card className="bg-white dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle>
                            Caixa
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="#">
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-1">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Valor inicial
                                    </label>
                                    {Number(caixa.valorInicial).toLocaleString('pt-br', { currency: 'brl', style: 'currency' })}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Saldo Atual
                                    </label>
                                    {Number(caixa.saldoAtual).toLocaleString('pt-br', { currency: 'brl', style: 'currency' })}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Valor Final
                                    </label>
                                    {Number(caixa.valorFinal).toLocaleString('pt-br', { currency: 'brl', style: 'currency' })}
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Data Abertura
                                    </label>
                                    {caixa.dataAbertura}
                                </div>
                                <div>
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Data Fechamento
                                    </label>
                                    {caixa.dataFechamento}
                                </div>

                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div >
        </PageLayoutComponent>


    );
}

export default CaixaPage;

function CaixaDialog({ setCaixa, dataEncerramento }: { setCaixa: (state: any) => void; dataEncerramento: string | n }) {
    const [initialValue, setInitialValue] = useState<number>(0);

    async function abrirCaixa(valorInicial: number) {
        try {
            await http.post(`/caixa/abrir/${valorInicial}`)
                .then(res => {
                    console.log(res.data);
                    setCaixa((prev: any) => {
                        return {
                            ...prev,
                            valorInicial: valorInicial,
                            saldoAtual: valorInicial,
                            data: res.data.data
                        }
                    })
                });
        } catch (e) {
            console.error(e)
        }
    }

    async function fecharCaixa(caixaId: string, setCaixa: (state: any) => void) {
        try {
            await http.post(`/caixa/fechar/${caixaId}`)
                .then(res => {
                    console.log(res.data);
                    setCaixa(res.data)
                });
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                >
                    Abrir Caixa
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Novo Caixa</DialogTitle>
                    <DialogDescription>
                        Insira um valor inicial.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <Label htmlFor="value" className="">
                            Valor inicial
                        </Label>
                        <Input
                            id="value"
                            type="number"
                            defaultValue="$"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInitialValue(Number(e.target.value))}
                            className="col-span-3"
                        />
                    </div>
                    O caixa será aberto com {initialValue?.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            disabled={initialValue <= 0}
                            onClick={() => {
                                abrirCaixa(initialValue);
                            }}
                        >
                            Confirmar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function SuprirDialog({ caixaId, update, setUpdate }: { caixaId: string; update: boolean; setUpdate: (state: boolean) => void }) {
    const [value, setValue] = useState<number>(0);

    async function suprirCaixa(valor: number) {
        try {
            await http.post(`/caixa/suprir/${caixaId}?valor=${valor}`)
                .then(res => {
                    console.log(res.data);
                    setUpdate(!update)
                });
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex items-center gap-2 hover:bg-orange-600 duration-100'
                >
                    <CircleDollarSign className='size-6' />
                    <p>Suprir Caixa</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Suprir Caixa</DialogTitle>
                    <DialogDescription>
                        Insira um valor para inserir.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <Label htmlFor="value" className="">
                            Valor
                        </Label>
                        <Input
                            id="value"
                            type="number"
                            defaultValue="$"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button
                            type="submit"
                            disabled={value <= 0}
                            onClick={() => {
                                suprirCaixa(value);
                            }}
                        >
                            Confirmar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}