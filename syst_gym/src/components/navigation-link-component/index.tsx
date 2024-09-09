import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface INavigationLinkProps {
    className?: string;
    children: React.ReactNode;
    icon: LucideIcon;
    to: string;
}

function NavigationLinkComponent({ className, children, icon: Icon, to }: INavigationLinkProps) {
    const navigate = useNavigate();

    return (
        <Button
            className={twMerge('flex items-center w-full justify-start gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary bg-zinc-200 hover:bg-zinc-500/50 cursor-pointer outline-none', className)}
            onClick={() => {
                navigate(to);
            }}
        >
            <Icon className="size-4" />
            {children}
        </Button>
    );
}

export { NavigationLinkComponent };