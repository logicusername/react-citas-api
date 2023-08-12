import { useState } from "react"
import "../App.css"

export function Buscador(){
    let [cedula,setCedula] = useState("")
    const [datos,setDatos] = useState([])
    
    function obtenerDatos(){
        fetch(`https://api-citas.vercel.app/api/cita/${cedula}`)
            .then((res) => res.json())
            .then(data => setDatos(data))
        return(
            document.getElementById("contenedor-columnas").style.display = "block"
        )    
    }
    return(
        <div>
            <div className="display">
                <form className= " bg-slate-900 etiqueta-contenedor">
                    <div className="datos-paciente">
                        <p className="text-white font-mono mt-64">Buscador Citas:</p> <br />
                        <p className="text-white font-mono">cedula paciente:</p> <br />
                        <input type="number" className="font-mono" onChange={(e) => setCedula(e.target.value)} /> <br /> <br />
                        <button type = "button" className="bg-green-300 px-2 py-1 rounded-md font-mono click" onClick={obtenerDatos}>Buscar</button><br /> <br />
                    </div>
                </form>
                <div className="contenedori">
                    <div id="contenedor-columnas">
                        <div className="grid-layout bottom font-mono ">
                            <h1 className="text-white caja">Nombre</h1>
                            <h1 className="text-white caja">Apellido</h1>
                            <h1 className="text-white caja">Doctor</h1>
                            <h1 className="text-white caja">Especialida</h1>
                        </div>
                    </div> 
                    <div className="overflow-container">
                        {datos.map((dato) => {
                            return(
                                <div>
                                    <div key={dato.id}                className="grid-layout-datos font-mono">
                                    <h2 className="text-slate-300  caja">{dato.name}</h2> 
                                    <h2 className="text-slate-300  caja">{dato.lastname}</h2>
                                    <h2 className="text-slate-300  caja">{dato.doctor}</h2>
                                    <h2 className="text-slate-300  caja">{dato.especialidad}</h2>    
                                    </div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}