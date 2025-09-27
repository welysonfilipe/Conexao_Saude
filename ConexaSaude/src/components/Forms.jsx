
import "./Forms.css"

const Forms = () => {
  return (
        
        <div className='forms-input'>
          <label>
                <input type="e-mail" placeholder="Digite o seu e-mail" />
              </label>
              <label>
                <input type="password" placeholder="Digite a sua senha" />
              </label>
              <a href="#" className="button-senha">Esqueceu a senha?</a>
        </div>

    )
}

export default Forms
