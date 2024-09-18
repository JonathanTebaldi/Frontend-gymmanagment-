// import { ArrowLeft, BicepsFlexed, CalendarDays, PlusCircle, UserCog } from "lucide-react";
// import { PageLayoutComponent } from "../../components/page-layout-component";
// import { StudentTableComponent } from "../../components/student-table-component";
// import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { PlusCircle } from "lucide-react";
import { PageLayoutComponent } from "../../components/page-layout-component";
import { StudentTableComponent } from "../../components/student-table-component";
import { Button } from "../../components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../../components/ui/card";

function SuportePage() {
    const navigate = useNavigate();

    return (
        <PageLayoutComponent title="Alunos">
            <div className="flex flex-col w-full gap-2 px-4 py-2">
                <div className='flex items-center justify-end w-full'>
        
                </div>
                <StudentTableComponent scrollAreaSize="h-[470px]" />
            </div>
        </PageLayoutComponent>
    );
}

export default SuportePage;