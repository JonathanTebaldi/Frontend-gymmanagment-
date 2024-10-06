import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router";
import { Search, ArrowUpRight } from "lucide-react";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "../ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function FuncionarioTableComponent({ scrollAreaSize, alunos }: { scrollAreaSize?: string; alunos: any[] }) {
    const [searchInput, setSearchInput] = useState<string>('');
    const navigate = useNavigate();

    const pathname = useLocation().pathname;

    if (!alunos) return

    const filtered_names = alunos.filter((data: any) => data);
    console.log(filtered_names[0]);
    return (
        <Card className='pb-2 h-full'>
            <CardHeader className="flex flex-row items-center">
                <div className="flex flex-col justify-center gap-2">
                    <CardTitle>Funcionários</CardTitle>
                    <CardDescription>
                        Todos funcionários
                    </CardDescription>
                    <div className='flex ml-2 items-center'>
                        <Search className='-mr-8 size-6' />
                        <Input
                            placeholder="Pesquisar por nome"
                            onChange={e => {
                                setSearchInput(e.target.value);
                            }}
                            value={searchInput}
                            className='pl-10'
                        />
                    </div>
                </div>
                <Button
                    onClick={() => {
                        navigate('/funcionarios');
                    }}
                    size="sm"
                    className={pathname == '/funcionarios' ? "hidden " : "ml-auto gap-1 hover:bg-orange-600 duration-100"}
                >
                    Ver todos
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </CardHeader>
            <ScrollArea className={twMerge("h-[377px]", scrollAreaSize)}>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Funcionario</TableHead>
                                <TableHead>Cargo</TableHead>
                                <TableHead>Ação</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered_names.length > 0 ? filtered_names.map((data, index) => {
                                console.log(data)
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{data.nome}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">{data.cargo}</div>
                                        </TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/funcionarios/funcionarios-form/${data.id}`);
                                                }}
                                            >
                                                Ver mais
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                );
                            }) : alunos.map((data, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{data.name}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">{data.cargo}</div>
                                        </TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/funcionarios/funcionarios-form/${data.id}`);
                                                }}
                                            >
                                                Ver mais
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </ScrollArea>
        </Card>
    );
}
