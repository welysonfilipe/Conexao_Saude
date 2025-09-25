import "./LoginUsuario.css";

import Logo from "../assets/saude_branco.png";

const login = () => {

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
          <h2>Conexão Saúde</h2>
          <p className="paragraph">Utilize o seu e-mail e senha cadastrada para efetuar login</p>
          <label>
            <input type="e-mail" placeholder="Digite o seu e-mail" />
          </label>
          <label>
            <input type="password" placeholder="Digite a sua senha" />
          </label>
          <button>Acessar Conta</button>
          <a href="#" className="button-link">Criar Conta</a>
        </div>
      
    </div>
  )
}

export default login
