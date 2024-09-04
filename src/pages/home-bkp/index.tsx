import { ArrowBack, Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen bg-slate-300 pt-20 pb-10 px-8">
      <div className="bg-black/40 w-full h-full rounded-xl">
        <div className='text-white flex items-center justify-center w-full'>
          <ArrowBack className='hover:cursor-pointer mr-20' />

          <h1 className='text-3xl font-bold'>Alunos</h1>
        </div>

        <div className='flex items-start justify-between w-full px-20 pt-20'>
          <div className='bg-slate-200 w-fit px-3 py-1 rounded-[3px]'>
            <Search className="mr-3" />
            <input type="text" className='bg-slate-200 px-2 outline-none' />
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='size-36 bg-slate-200 rounded-md' />

            <p className='text-black bg-slate-200 px-3 py-1 rounded-full text-lg font-medium'>
              Ronnie Colleman
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}
