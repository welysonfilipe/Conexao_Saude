import { useState } from "react";
import "./LoginUsuario.css";
import Forms from "../components/Forms"
import { useNavigate } from 'react-router-dom'


import Logo from "../assets/saude_branco.png";
import LogoIcon from "../assets/saude.png";
import Button from "../components/Button";

const login = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState("login")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === "login") {
      navigate('/home')

    } else {
      navigate('/cadastro')
    }
  }

  return (
    <div className="container">
        {/* Lado esquerdo */}
        <div className="left-side">
            <div className="logo"><img src={Logo} alt="logo site" /></div>
            <h1>Saúde na palma das suas mãos</h1>
            <p>Conecte-se com profissionais de saúde e tenha atendimento onde e quando quiser</p>
        </div>

        {/* Lado direito */}
        <div className="right-side">
          <div className="LogoIcon"><img src={LogoIcon} alt="Icon da logo" />
          <h2 className="Logo-Text">Conexão <span className="Logo-Text-2">Saúde</span></h2>
          </div>
          
          <div className="form-area">
          <p className="paragraph">{mode === "login" ? "Utilize o seu e-mail e senha cadastrada para efetuar login": "Preencha os campos abaixo para criar sua conta"}</p>

          <Forms mode={mode} />

          <Button text={mode === "login" ? "Acessar Conta" : "Criar Conta"} 
            type="submit"
            onClick={handleSubmit}
          />
          {/* Link alternar entre login/cadastro */}
          {mode === "login" ? (
            <a
              href="#"
              className="button-link"
              onClick={(e) => { e.preventDefault(); setMode('register')}}
            >
              Criar Conta
            </a>
          ) : (
            <a
              href="#"
              className="button-link"
              onClick={(e) => { e.preventDefault(); setMode("login")}}
            >
              Efetuar Login
            </a>
          )}
          </div>

          {/* Rodapé */}
          <div className="rodape">
            <a href="#" className="button-help">Precisa de ajuda?</a>
            <p className="paragraph-2">2025 Conexão Sáude - Todos os direitos reservados</p>
          </div>
        </div>
    </div>
  )
}

export default login
