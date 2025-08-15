import React, { useState } from 'react';
import { Calendar, Clock, Car, CreditCard, User, Phone, Save } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    nomeCliente: '',
    telefone: '',
    data: '',
    horario: '',
    veiculo: '',
    tipoLavagem: '',
    formaPagamento: ''
  });

  // Função para lidar com a mudança nos inputs e selects do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Agendamento salvo:', formData);
    // ATENÇÃO: A função alert() pode não funcionar em todos os ambientes.
    // Esta é uma maneira simples de dar feedback ao usuário.
    alert('Agendamento salvo com sucesso!');
  };

  // Horários disponíveis para seleção
  const horariosDisponiveis = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Agendamento Auto
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Card do Formulário */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo: Nome do Cliente */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  Nome do Cliente
                </label>
                <input
                  type="text"
                  name="nomeCliente"
                  value={formData.nomeCliente}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="Digite o nome completo"
                  required
                />
              </div>

              {/* Campo: Telefone */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              {/* Campo: Data */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  Data do Agendamento
                </label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                  required
                />
              </div>

              {/* Campo: Horário */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  Horário
                </label>
                <select
                  name="horario"
                  value={formData.horario}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  required
                >
                  <option value="">Selecione um horário</option>
                  {horariosDisponiveis.map(horario => (
                    <option key={horario} value={horario}>
                      {horario}
                    </option>
                  ))}
                </select>
              </div>

              {/* Campo: Veículo */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <Car className="w-4 h-4 mr-2 text-blue-600" />
                  Qual seu veículo?
                </label>
                <select
                  name="veiculo"
                  value={formData.veiculo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  required
                >
                  <option value="">Selecione o tipo de veículo</option>
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                  <option value="caminhonete">Caminhonete</option>
                  <option value="van">Van</option>
                  <option value="caminhao">Caminhão</option>
                </select>
              </div>

              {/* Campo: Tipo de Lavagem */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <div className="w-4 h-4 mr-2 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  Tipo de Lavagem
                </label>
                <select
                  name="tipoLavagem"
                  value={formData.tipoLavagem}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  required
                >
                  <option value="">Selecione o tipo de lavagem</option>
                  <option value="completa">Completa</option>
                  <option value="externa">Externa</option>
                  <option value="interna">Apenas Interna</option>
                  <option value="revitalizacao">Revitalização</option>
                </select>
              </div>

              {/* Campo: Forma de Pagamento */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                  <CreditCard className="w-4 h-4 mr-2 text-blue-600" />
                  Forma de Pagamento
                </label>
                <select
                  name="formaPagamento"
                  value={formData.formaPagamento}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  required
                >
                  <option value="">Selecione a forma de pagamento</option>
                  <option value="dinheiro">Dinheiro</option>
                  <option value="pix">PIX</option>
                  <option value="credito">Crédito</option>
                  <option value="debito">Débito</option>
                </select>
              </div>

              {/* Botão Salvar */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Save className="w-5 h-5" />
                  <span>Salvar Agendamento</span>
                </button>
              </div>
            </form>
          </div>

          {/* Rodapé */}
          <div className="text-center mt-8">
            <p className="text-slate-500 text-sm">
              Agendamento rápido e fácil para manter seu veículo sempre limpo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
