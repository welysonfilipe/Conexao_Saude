import { useState } from "react";
import Button from "./Button";
import "./AgendamentoForm.css";

const AgendamentoForm = ({ formData, setFormData, especialidades, onSubmit }) => {
  const [medicosFiltrados, setMedicosFiltrados] = useState([]);

  const handleEspecialidadeChange = (e) => {
    const especialidadeSelecionada = e.target.value;
    setFormData({ ...formData, especialidade: especialidadeSelecionada, medico: "" });

    // Filtra médicos da especialidade selecionada
    const especialidade = especialidades.find(esp => esp.nome === especialidadeSelecionada);
    setMedicosFiltrados(especialidade ? especialidade.medicos : []);
  };

  return (
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
          onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
        />
      </div>

      <div className="form-field-popup">
        <label>Convênio médico</label>
        <div className="convenio-inputs">
          <input
            type="text"
            placeholder="Sim / Não"
            style={{ flex: 1 }}
          />
          <input
            type="text"
            placeholder="Unimed / Particular"
            style={{ flex: 1 }}
          />
        </div>
      </div>

      <div className="form-field-popup">
        <label>Especialidade</label>
        <select
          value={formData.especialidade}
          onChange={handleEspecialidadeChange}
        >
          <option value="">Selecione uma especialidade</option>
          {especialidades.map((esp) => (
            <option key={esp.id} value={esp.nome}>{esp.nome}</option>
          ))}
        </select>
      </div>

      <div className="form-field-popup">
        <label>Nome do médico</label>
        <select
          value={formData.medico}
          onChange={(e) => setFormData({ ...formData, medico: e.target.value })}
          disabled={!formData.especialidade}
        >
          <option value="">Selecione um médico</option>
          {medicosFiltrados.map((medico, index) => (
            <option key={index} value={medico}>{medico}</option>
          ))}
        </select>
      </div>

      <div className="popup-actions">
        <Button
          text="Agendar Consulta"
          onClick={onSubmit}
          className="button-agendar"
        />
      </div>
    </div>
  );
};

export default AgendamentoForm;