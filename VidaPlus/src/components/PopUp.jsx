import "./PopUp.css";

const PopUp = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>{title}</h3>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>
        <div className="popup-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopUp;