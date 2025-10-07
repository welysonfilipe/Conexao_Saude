import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import consultasData from "../data/consultasData.json"
import "./HistoricoConsultas.css"

const HistoricoConsultas = () => {

  const consultas = consultasData.consultas;

  return (
    <div className="home-container">
      <NavBar />
      
      <div className="home-content">
        {/* Sidebar */}
        <aside className="sidebar">
         <Sidebar />
        </aside>

       {/*Conteúdo Principal*/}
       <main className='main-content'>
        <div className='header-section'>
          <h1>Histórico de Consultas</h1>
          <div className="info-section">
            <div className="info-field">
              <label>Nome:</label>
              <input type="text" placeholder="" />
            </div>
            <div className="info-field">
              <label>Convênio:</label>
              <input type="text" placeholder="" />
            </div>
          </div>
        </div>

        <Table 
        headers={["Data", "Especialista", "Dados da Consulta"]}
        data={consultas}
        columns="150px 200px 1fr"/>
       </main>

      </div>
   </div>
  )
}

export default HistoricoConsultas
