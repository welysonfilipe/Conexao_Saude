import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Vida Plus</h4>
          <p>Saúde na palma das suas mãos. Conecte-se com profissionais de saúde e tenha atendimento onde e quando quiser.</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agenda">Agenda</Link></li>
            <li><Link to="/teleconsulta">Teleconsulta</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul className="footer-info">
            <li>📧 contato@vidaplus.com.br</li>
            <li>📞 (11) 4002-8922</li>
            <li>💬 (11) 91234-5678</li>
            <li>📍 Av. São Paulo, 349 - Cruzeiro/SP</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Horário de Atendimento</h4>
          <ul className="footer-info">
            <li>Segunda a Sexta: 8h às 18h</li>
            <li>Sábado: 8h às 12h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Vida Plus- Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;