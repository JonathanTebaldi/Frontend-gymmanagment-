import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();

  return (
      <section className="w-screen h-screen bg-orange-500">
      <div className="flex flex-col items-center justify-between pt-96 w-full h-full ">
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            className="w-[250px] h-[50px]"
            onClick={() => {
                navigate('/login');
            }}
          >
            Entrar
          </Button>

      </div>
    </section>
  )
}
