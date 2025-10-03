import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (

    <nav className='navbar-page'>
        <h2 className='title-page'>Conexão Saúde</h2>

        <div className="navbar-link">
          <Link>Home</Link>
          <Link>Agenda</Link>
          <Link>Contato</Link>
        </div>
    </nav> 

  )
}

export default NavBar
