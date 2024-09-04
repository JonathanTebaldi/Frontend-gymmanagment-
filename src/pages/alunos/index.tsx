import { ArrowBack, Search } from "@mui/icons-material";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyBackground } from "../../components/my-background";

export function Alunos() {
  const navigate = useNavigate();

  const namesList: string[] = [
    'Ronnie Colleman',
    'Renato Cariane',
    'Paulo Muzy',
    'Togordo',
    'Jay Cutler',
    'Ramon Dino',
    'Tadala',
    'Arnold',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
    'Leo Stronda',
  ]

  return (
    <MyBackground>
      <div className='text-white flex items-center justify-center w-full'>
        <ArrowBack className='hover:cursor-pointer mr-20' />

        <h1 className='text-3xl font-bold'>
          Alunos
        </h1>
      </div>

      <div className='flex items-start justify-between w-full px-20 pt-20'>
        <div className='flex flex-col max-h-[400px]'>
          <div className='bg-slate-200 w-fit px-3 py-1 mb-1 rounded-[3px]'>
            <Search className="mr-3" />
            <input type="text" className='bg-slate-200 px-2 outline-none' />
          </div>

          <div className='flex flex-col max-h-[350px] overflow-y-scroll'>
            {namesList.map((name: string, index: number) => {
              return (
                <Card key={index} variant="outlined" className='min-h-12 hover:bg-black/5 mb-2'>
                  <CardContent>
                    <p>{name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='size-36 bg-slate-200 rounded-md' />

          <p className='text-black bg-slate-200 px-3 py-1 rounded-full text-lg font-medium'>
            Ronnie Colleman
          </p>

          <Button
            sx={{ backgroundColor: 'orange', borderRadius: 100, color: 'white', paddingX: 2, border: 1, borderColor: 'black' }}
            onClick={() => navigate('3/matricula')}
          >
            Ver matrícula
          </Button>
        </div>
      </div>
    </MyBackground>
  )
}
