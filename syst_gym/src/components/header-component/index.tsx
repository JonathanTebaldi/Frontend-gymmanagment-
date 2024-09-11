import { PopoverComponent } from "../popover-component";

interface IHeaderProps {
    title: string;
}

function HeaderComponent({ title }: IHeaderProps) {
    return (
        <div className='text-xl px-4 pb-2 bg-black/75 text-white shadow-md border-b-2 border-orange-600 w-full h-12 flex items-center justify-between'>
            <h1 className='font-bold uppercase select-none'>{title}</h1>

            <PopoverComponent />
        </div>
    );
}

export { HeaderComponent };