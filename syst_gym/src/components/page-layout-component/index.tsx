import { Outlet } from "react-router";
import { NavbarComponent } from "../navbar-component";
import { HeaderComponent } from "../header-component";

interface IPageLayoutProps {
    children: React.ReactNode;
    title: string;
}

function PageLayoutComponent({ children, title }: IPageLayoutProps) {
    return (
        <section className='flex'>
            <NavbarComponent />
            <div className='flex flex-col w-full h-screen bg-zinc-200'>
                <HeaderComponent title={title} />
                {children}
            </div>
            <Outlet />
        </section>
    );
}

export { PageLayoutComponent };