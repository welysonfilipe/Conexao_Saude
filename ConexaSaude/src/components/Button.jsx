import "./Button.css"

const Button = ({text, onClick, type = "button"}) => {
  return (
    <div className="container-button">
      <button className="button-login" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button

