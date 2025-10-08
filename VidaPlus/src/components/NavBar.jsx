import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate()

  return (

    <nav className='navbar-page'>
        <h2 className='title-page'>Conexão Saúde</h2>

        <div className="navbar-link">
          <Link onClick={() => navigate('/home')}>Home</Link>
          <Link>Contato</Link>
          <Link onClick={() => navigate('/')}>Sair</Link>
        </div>
    </nav> 

  )
}

export default NavBar
