import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router";
import { Search, ArrowUpRight } from "lucide-react";
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "../ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function StudentTableComponent({ scrollAreaSize }: { scrollAreaSize?: string; }) {
    const [searchInput, setSearchInput] = useState<string>('');
    const navigate = useNavigate();

    const pathname = useLocation().pathname;

    const list_names = [
        {
            id: 1,
            name: 'Liam Johnson',
            email: 'liam.johnson@email.com'
        },
        {
            id: 2,
            name: 'Emma Smith',
            email: 'emma.smith@email.com'
        },
        {
            id: 3,
            name: 'Noah Brown',
            email: 'noah.brown@email.com'
        },
        {
            id: 4,
            name: 'Olivia Garcia',
            email: 'olivia.garcia@email.com'
        },
        {
            id: 5,
            name: 'William Martinez',
            email: 'william.martinez@email.com'
        },
        {
            id: 6,
            name: 'Ava Rodriguez',
            email: 'ava.rodriguez@email.com'
        },
        {
            id: 7,
            name: 'James Hernandez',
            email: 'james.hernandez@email.com'
        },
        {
            id: 8,
            name: 'Sophia Lopez',
            email: 'sophia.lopez@email.com'
        },
        {
            id: 9,
            name: 'Benjamin Gonzalez',
            email: 'benjamin.gonzalez@email.com'
        },
        {
            id: 10,
            name: 'Isabella Wilson',
            email: 'isabella.wilson@email.com'
        },
        {
            id: 11,
            name: 'Lucas Anderson',
            email: 'lucas.anderson@email.com'
        },
        {
            id: 12,
            name: 'Mia Thomas',
            email: 'mia.thomas@email.com'
        },
        {
            id: 13,
            name: 'Henry Taylor',
            email: 'henry.taylor@email.com'
        },
        {
            id: 14,
            name: 'Amelia Moore',
            email: 'amelia.moore@email.com'
        },
        {
            id: 15,
            name: 'Alexander Jackson',
            email: 'alexander.jackson@email.com'
        },
        {
            id: 16,
            name: 'Charlotte Martin',
            email: 'charlotte.martin@email.com'
        }
    ];

    const filtered_names = list_names.filter(data => data.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <Card className='pb-2 h-full'>
            <CardHeader className="flex flex-row items-center">
                <div className="flex flex-col justify-center gap-2">
                    <CardTitle>Alunos</CardTitle>
                    <CardDescription>
                        Recent transactions from your store.
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
                        navigate('/alunos');
                    }}
                    size="sm"
                    className={pathname == '/alunos' ? "hidden ": "ml-auto gap-1 hover:bg-orange-600 duration-100"}
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
                                <TableHead>Aluno</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Ação</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filtered_names.length > 0 ? filtered_names.map((data, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{data.name}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">{data.email}</div>
                                        </TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/alunos/matricula/${data.id}`);
                                                }}
                                            >
                                                Ver matrícula
                                            </Button>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/alunos/${data.id}`);
                                                }}
                                            >
                                                Detalhes
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            }) : list_names.map((data, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{data.name}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium">{data.email}</div>
                                        </TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/alunos/matricula/${data.id}`);
                                                }}
                                            >
                                                Ver matrícula
                                            </Button>
                                            <Button
                                                className="hover:bg-orange-600 duration-100"
                                                onClick={() => {
                                                    navigate(`/alunos/${data.id}`);
                                                }}
                                            >
                                                Detalhes
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
