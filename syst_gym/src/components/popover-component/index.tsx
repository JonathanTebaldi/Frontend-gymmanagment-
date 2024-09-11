import { NavigationLinkComponent } from "../navigation-link-component";
import { CircleUser, LogOut, Settings } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

function PopoverComponent() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='flex items-center justify-center gap-1 font-semibold cursor-pointer select-none hover:text-orange-600 duration-100'>
                    <CircleUser className='size-7 mt-1' />
                    Jonathan
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 h-fit outline-none bg-white rounded-md shadow-md border-2 border-zinc-300">
                <p
                    className='w-full h-fit py-1 pl-1 text-black uppercase text-center font-medium'
                >
                    Menu
                </p>
                <div className='flex flex-col justify-center gap-2 px-4 py-2'>
                    <NavigationLinkComponent icon={Settings} to="/config">
                        Configurações
                    </NavigationLinkComponent>
                    <NavigationLinkComponent icon={LogOut} to="/login">
                        Sair
                    </NavigationLinkComponent>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export { PopoverComponent };
