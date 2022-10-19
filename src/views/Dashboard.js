import React,{ useState } from "react";
import { CreateCurses } from "./CreateCurses";
import { EditCurses } from "./EditCurses";

export function Dashboard() {

    const [view,setView] = useState(0);

    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-header-inner">
                    <h2 className="dashboard-title">Dashboard</h2>
                </div>
            </div>
            <button className="button" onClick={() => setView(1)}>Crear Curso</button>
            <button className="button" onClick={() => setView(2)}>Editar Cursos</button>
            {view === 1 ? <CreateCurses/> : ''}
            {view === 2 ? <EditCurses/> : ''}
        </>
    )   
}