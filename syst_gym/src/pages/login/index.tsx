import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { http } from "../../service";

function LoginPage() {
    const navigate = useNavigate();

    async function onSubmit() {
        try{
            await http.post("/auth/login", {
                login: "email@gmail.com",
                senha: "123"
            })
            .then(response => {
                console.log(response.data)
                navigate('/dashboard');
            })
        }catch(e){
            console.error(e);
        }
       
    }

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 min-h-[800px]">
            <div className="flex items-center justify-center">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">go
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
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
                            <div className="flex items-center">
                                <Label htmlFor="password">Senha</Label>
                                <a
                                    href="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button
                            type="submit"
                            className="w-full hover:bg-orange-600 duration-100"
                            onClick={onSubmit}
                        >
                            Entrar
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Não tem um conta?{" "}
                        <span
                            onClick={() => navigate('/register')}
                            className="underline cursor-pointer hover:text-orange-600 duration-100"
                        >
                            Cadastre-se
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-screen w-full object-right object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>

    );
}

export default LoginPage;