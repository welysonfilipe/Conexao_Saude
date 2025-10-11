import "./FormField.css";

const FormField = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder = "",
  name,
  className = "",
  options = [] // Para select/checkbox
}) => {
  
  if (type === "checkbox") {
    return (
      <div className={`form-field-comp ${className}`}>
        <label className="field-label">{label}</label>
        <div className="checkbox-options">
          {options.map((option, index) => (
            <label key={index} className="checkbox-option">
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`form-field-comp ${className}`}>
      <label className="field-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="field-input"
      />
    </div>
  );
};

export default FormField;