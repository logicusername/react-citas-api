
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import  { Doctor }  from "./pages/Doctor"
import  { Paciente }  from "./pages/Paciente"
import { Citas } from "./pages/Citas"
import { Buscador } from "./pages/Buscador"
import "./App.css"

function App (){
    return(
        <div className="bg-slate-800 display nav-bar">
            <BrowserRouter>
                <Navegacion/>
                    <Routes>
                        <Route path="/doctor" element= {<Doctor/>}/>
                        <Route path="/paciente" element = {<Paciente/>}/>
                        <Route path="/citas" element = {<Citas/>}/>
                        <Route path="/buscador" element = {<Buscador/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
                
    )
}
function Navegacion(){
    return<nav>
        <ul>
            <li>
                <Link to="/doctor" className="text-white font-mono mt-1 text-lg">DOCTOR</Link>
            </li><br />
            <li>
                <Link to="/paciente" className="text-white font-mono mt-1 text-lg">PACIENTE</Link>
            </li><br />
            <li>
                <Link to="/citas" className="text-white font-mono mt-1 text-lg">ASIGNAR CITA</Link>
            </li><br />
            <li>
                <Link to="/buscador" className="text-white font-mono mt-1 text-lg">BUSCAR CITA</Link>
            </li><br />
        </ul>
    </nav>
    
}
export default App