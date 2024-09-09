import { PopoverComponent } from "../popover-component";

interface IHeaderProps {
    title: string;
}

function HeaderComponent({ title }: IHeaderProps) {
    return (
        <div className='text-xl px-4 pb-2 bg-black/75 text-white shadow-md w-full h-12 flex items-center justify-between'>
            <h1 className='font-bold uppercase'>{title}</h1>

            <PopoverComponent />
        </div>
    );
}

export { HeaderComponent };