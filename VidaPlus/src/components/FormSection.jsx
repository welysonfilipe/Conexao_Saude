import "./FormSection.css";

const FormSection = ({ title, children }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

export default FormSection;