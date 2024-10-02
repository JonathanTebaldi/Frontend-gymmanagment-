import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "../../components/ui/select";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";
import { useState } from "react";

function PagamentoPage() {
    const [paymentForm, setPaymentForm] = useState('')

    return (
        <PageLayoutComponent title="Pagamento">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <Card className="bg-white dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle>
                            Efetuar pagamento
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action="#" className="flex items-start gap-16">
                            <div className="flex flex-col justify-center items-start">
                                <p className="font-medium">Valor:</p>
                                <span className="font-bold text-2xl">
                                    {Number(128).toLocaleString("pt-BR", { currency: "BRL", style: "currency" })}
                                </span>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <p className="font-medium">Forma de Pagamento:</p>
                                    <Select
                                        onValueChange={(event: any) => {
                                            setPaymentForm(String(event));
                                        }}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Forma de pagamento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Forma de pagamento</SelectLabel>
                                                <SelectItem value="1">Pix</SelectItem>
                                                <SelectItem value="2">Crédito</SelectItem>
                                                <SelectItem value="3">Débito</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className='flex items-center justify-end'>
                        <Button
                            onClick={() => {
                                alert("Registrado com sucesso.");
                            }}
                        >
                            Finalizar
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </PageLayoutComponent>
    )
}

export default PagamentoPage;