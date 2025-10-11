import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate()

  return (

    <nav className='navbar-page'>
        <h2 className='title-page'>Vida Plus</h2>

        <div className="navbar-link">
          <Link onClick={() => navigate('/home')}>Home</Link>
          <Link onClick={() => navigate('/contato')}>Contato</Link>
          <Link onClick={() => navigate('/')}>Sair</Link>
        </div>
    </nav> 

  )
}

export default NavBar
