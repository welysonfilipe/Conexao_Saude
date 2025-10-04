import "./Button.css"

const Button = ({text, onClick, type = "button", className = ""}) => {
  return (
    <div className="container-button">
      <button className={`button-login ${className}`} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button

