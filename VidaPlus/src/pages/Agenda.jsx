import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pt-br";
import "./Agenda.css";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import PopUp from "../components/PopUp";
import Button from "../components/Button";

moment.locale("pt-br");
const localizer = momentLocalizer(moment);

const messages = {
                next: "Próximo",
                previous: "Anterior",
                today: "Hoje",
                month: "Mês",
                week: "Semana",
                day: "Dia"
              }

const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [PopUpOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [tipoConsulta, setTipoConsulta] = useState("presencial");
  
  // Dados do formulário
  const [formData, setFormData] = useState({
    data: "",
    horario: "",
    especialidade: "",
    medico: ""
  });

  const especialidades = [
    "Cardiologia",
    "Dermatologia",
    "Endocrinologia",
    "Gastroenterologia",
    "Ginecologia",
    "Neurologia",
    "Nutricionista",
    "Ortopedia",
    "Pediatria",
    "Psiquiatria",
    "Urologia"
  ];

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
    setFormData({
      ...formData,
      data: moment(slotInfo.start).format("DD/MM/YYYY")
    });
    setModalOpen(true);
  };

  const handleAgendarConsulta = () => {
    if (!formData.horario || !formData.especialidade || !formData.medico) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const newEvent = {
      title: `${formData.especialidade} - ${formData.medico}`,
      start: selectedDate,
      end: selectedDate,
      allDay: false
    };

    setEvents([...events, newEvent]);
    setModalOpen(false);
    setFormData({
      data: "",
      horario: "",
      especialidade: "",
      medico: ""
    });
  };

  return (
       <div className="home-container">
      <NavBar />
      
      <div className="home-content">
        {/* Sidebar */}
        <aside className="sidebar">
         <Sidebar />
        </aside>

       {/*Conteúdo Principal*/}
      <main className="main-content">
          <h1>Agendar</h1>

          <div className="tipo-consulta">
            <label className="tipo-label">Tipo de Consulta</label>
            <div className="checkbox-group">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={tipoConsulta === "presencial"}
                  onChange={() => setTipoConsulta("presencial")}
                />
                Presencial
              </label>
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  checked={tipoConsulta === "teleconsulta"}
                  onChange={() => setTipoConsulta("teleconsulta")}
                />
                Teleconsulta
              </label>
            </div>
            <p className="info-text">Selecione o dia e o horário da sua consulta</p>
          </div>

          <div className="calendar-wrapper">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              selectable
              onSelectSlot={handleSelectSlot}
              messages={messages}
              culture="pt-BR"
            />
          </div>
        </main>
      </div>

      {/* Modal de Agendamento */}
      <PopUp
        isOpen={PopUpOpen}
        onClose={() => setModalOpen(false)}
        title="Marque a sua consulta"
      >
        <div className="form-popup">
          <div className="form-field-popup">
            <label>Dia selecionado</label>
            <input
              type="text"
              value={formData.data}
              disabled
              placeholder="dd/mm/aaaa"
            />
          </div>

          <div className="form-field-popup">
            <label>Horário da consulta</label>
            <input
              type="time"
              value={formData.horario}
              onChange={(e) => setFormData({...formData, horario: e.target.value})}
            />
          </div>

          <div className="form-field-popup">
            <label>Convênio médico</label>
            <div className="convenio-inputs">
              <input
                type="text"
                placeholder="Sim / Não"
                style={{flex: 1}}
              />
              <input
                type="text"
                placeholder="Unimed / Particular"
                style={{flex: 1}}
              />
            </div>
          </div>

          <div className="form-field-popup">
            <label>Especialidade</label>
            <select
              value={formData.especialidade}
              onChange={(e) => setFormData({...formData, especialidade: e.target.value})}
            >
              <option value="">Selecione uma especialidade</option>
              {especialidades.map((esp) => (
                <option key={esp} value={esp}>{esp}</option>
              ))}
            </select>
          </div>

          <div className="form-field-popup">
            <label>Nome do médico</label>
            <input
              type="text"
              value={formData.medico}
              onChange={(e) => setFormData({...formData, medico: e.target.value})}
              placeholder="Digite o nome do médico"
            />
          </div>

          <div className="popup-actions">
            <Button
              text="Agendar Consulta"
              onClick={handleAgendarConsulta}
              className="button-agendar"
            />
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default Agenda;