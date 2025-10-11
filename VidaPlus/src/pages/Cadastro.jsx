import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import NavBar from "../components/NavBar";
import FormSection from "../components/FormSection";
import FormField from "../components/FormField";
import Button from "../components/Button";

const Cadastro = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Dados de identificação
    nomeCompleto: "",
    cpf: "",
    dataNascimento: "",
    idade: "",
    sexo: "",
    estadoCivil: "",
    profissao: "",
    naturalidade: "",
    nomeMae: "",
    
    // Dados de contato
    celular: "",
    whatsapp: "sim",
    telefone: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    cidade: "",
    pais: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSalvar = () => {
    // Validação básica
    if (!formData.nomeCompleto || !formData.cpf || !formData.email) {
      alert("Por favor, preencha os campos obrigatórios!");
      return;
    }

    // Aqui você salvaria os dados
    console.log("Dados do paciente:", formData);
    alert("Cadastro realizado com sucesso!");
    navigate('/home');
  };

  return (
    <div className="cadastro-container">
      <NavBar />
      
      <div className="cadastro-content">
        <h1>Cadastro de Paciente</h1>

        <FormSection title="Dados de identificação">
          <FormField
            label="Nome Completo:"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            className="field-large"
          />
          <FormField
            label="CPF:"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Data de Nascimento:"
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Idade:"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            className="field-medium"
          />

          <FormField
            label="Sexo:"
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Estado Civil:"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Profissão:"
            name="profissao"
            value={formData.profissao}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Naturalidade:"
            name="naturalidade"
            value={formData.naturalidade}
            onChange={handleChange}
            className="field-medium"
          />

          <FormField
            label="Nome da Mãe:"
            name="nomeMae"
            value={formData.nomeMae}
            onChange={handleChange}
            className="field-large"
          />
        </FormSection>

        <FormSection title="Dados de Contato">
          <FormField
            label="Celular:"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            className="field-small"
          />
          <FormField
            label="WhatsApp:"
            type="checkbox"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            options={[
              { label: "Sim", value: "sim" },
              { label: "Não", value: "nao" }
            ]}
            className="field-small"
          />
          <FormField
            label="Telefone:"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="field-small"
          />
          <FormField
            label="E-mail:"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="field-large"
          />

          <FormField
            label="CEP:"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Endereço:"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Número:"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Bairro:"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            className="field-medium"
          />

          <FormField
            label="Complemento:"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="Cidade:"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            className="field-medium"
          />
          <FormField
            label="País:"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            className="field-medium"
          />
        </FormSection>

        <div className="button-section-cadastro">
          <Button
            text="Salvar"
            onClick={handleSalvar}
            className="button-salvar"
          />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
