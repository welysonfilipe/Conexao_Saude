import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import "./Agenda.css"

const Agenda = () => {
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
          <h1>Agendar Consulta</h1>
        </div>
       </main>

      </div>
   </div>
  )
}

export default Agenda