import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";

function RegisterPage() {
    const navigate = useNavigate();

    return (
        <Card className="mx-auto xl:my-20 max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Cadastro</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">Nome</Label>
                            <Input id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Sobrenome</Label>
                            <Input id="last-name" placeholder="Robinson" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button
                        type="submit"
                        className="w-full hover:bg-orange-600 duration-100"
                    >
                        Criar
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Já tem uma conta?{" "}
                    <span
                        onClick={() => navigate('/login')}
                        className="underline cursor-pointer hover:text-orange-600 duration-100"
                    >
                        Login
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}

export default RegisterPage;