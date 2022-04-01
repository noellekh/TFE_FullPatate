import React from "react";
import NavbarAdmin from './components/NavbarAdmin';
import AdminCalendar from './components/AdminCalendar';

const AgendaAdmin= () =>{
    return (
        <div className="agenda-client">
            <NavbarAdmin />
            <h2> Agenda Clients </h2>
            <section className="ag-client-contenu">
                <div className="ag-calendrier-client">
                    <AdminCalendar />

                </div>
            </section>
        </div>
        
    )
}

export default AgendaAdmin;