import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

  return (
    <section className="w-screen h-screen bg-orange-500">
      <div className="flex flex-col items-center justify-between py-40 w-full h-full ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-7xl font-semibold text-white">
            Pump House
          </h1>

          <h2 className="text-5xl font-semibold text-white capitalize ">
            login
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <TextField className="w-[300px]" id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField className="w-[300px]" id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            className="w-[250px] h-[50px]"
            onClick={() => {
                navigate('/');
            }}
          >
            Entrar
          </Button>
        </div>

      </div>
    </section>
  )
}

