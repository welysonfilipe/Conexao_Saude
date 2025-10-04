import { useNavigate } from "react-router-dom"
import "./sidebar.css"

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className='sidebar'>
        <button className="sidebar-item active" onClick={() => navigate('/agenda')}>Agendar</button>
            <button className="sidebar-item" onClick={() => navigate('/resultados')}>Resultado de Exames</button>
            <button className="sidebar-item" onClick={() => navigate('/historico-consultas')}>Histórico de Consultas</button>
            <button className="sidebar-item" onClick={() => navigate('/historico-tratamentos')}>Histórico de Tratamentos</button>
            <button className="sidebar-item" onClick={() => navigate('/teleconsulta')}>Teleconsulta</button>
        </div>
  )
}

export default Sidebar
