import { Home, LineChart, Package, ShoppingCart, Users } from 'lucide-react';
import { NavigationLinkComponent } from '../navigation-link-component';

function NavbarComponent() {
    return (
        <div className="flex-1 min-w-[200px] max-w-[250px] min-h-full py-5 border-r-[1px]">
            <nav className="flex flex-col items-center gap-2 px-2 text-sm font-medium lg:px-4">
                <NavigationLinkComponent icon={Home} to='/dashboard'>
                    Dashboard
                </NavigationLinkComponent>
                <NavigationLinkComponent icon={ShoppingCart} to='/'>
                    Order
                </NavigationLinkComponent>
                <NavigationLinkComponent icon={Package} to='/matriculas'>
                    Matrículas
                </NavigationLinkComponent>
                <NavigationLinkComponent icon={Users} to='/alunos'>
                    Alunos
                </NavigationLinkComponent>
                <NavigationLinkComponent icon={LineChart} to='/'>
                    Metrics
                </NavigationLinkComponent>
            </nav>
        </div>
    );
}

export { NavbarComponent };