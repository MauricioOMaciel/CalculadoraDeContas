// Seleciona os elementos do HTML
const salarioInput = document.getElementById('salario');
const addContaButton = document.getElementById('add-conta');
const calcularButton = document.getElementById('calcular');
const listaContas = document.getElementById('lista-contas');
const valorRestante = document.getElementById('valor-restante');

// Cria um array para armazenar as contas
let contas = [];

// Função para adicionar uma nova conta
function addConta() {
  // Seleciona os elementos do HTML para a nova conta
  const nomeInput = document.createElement('input');
  nomeInput.type = 'text';
  nomeInput.placeholder = 'Nome da conta';
  
  const valorInput = document.createElement('input');
  valorInput.type = 'number';
  valorInput.placeholder = 'Valor';
  
  const removerButton = document.createElement('button');
  removerButton.type = 'button';
  removerButton.textContent = 'Remover';
  removerButton.addEventListener('click', function() {
    listaContas.removeChild(contaDiv);
    contas = contas.filter((conta) => conta !== novaConta);
    atualizarValorRestante();
  });
  
  const novaConta = { nomeInput, valorInput, removerButton };
  contas.push(novaConta);
  
  // Cria um div para a nova conta e adiciona os elementos do HTML
  const contaDiv = document.createElement('div');
  contaDiv.classList.add('conta');
  contaDiv.appendChild(nomeInput);
  contaDiv.appendChild(valorInput);
  contaDiv.appendChild(removerButton);
  
  listaContas.appendChild(contaDiv);
}

// Função para atualizar o valor restante
function atualizarValorRestante() {
  const salario = parseFloat(salarioInput.value);
  let totalContas = 0;
  contas.forEach((conta) => totalContas += parseFloat(conta.valorInput.value));
  const restante = salario - totalContas;
  valorRestante.textContent = `Valor Restante: R$ ${restante.toFixed(2)}`;
}

// Adiciona um evento de clique no botão "Adicionar Conta"
addContaButton.addEventListener('click', addConta);

// Adiciona um evento de clique no botão "Calcular"
calcularButton.addEventListener('click', atualizarValorRestante);
