const form = document.getElementById("form-cadastro");
let linhas = '';
let linha = '';
let IdArray = 0;
let IdLinha = 0;
let ArrayCompleto = [];

const inputNome = document.getElementById('nome-contato');// Seletor do campo Nome
const inputTelefone = document.getElementById('tel'); // Seletor do campo de telefone

inputTelefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
inputTelefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo
inputTelefone.addEventListener('keyup', (e) => mascaraTelefone(e.target.value)) // Dispara após digitado no campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    inputTelefone.value = valor // Insere o(s) valor(es) no campo
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    AdicionaLinha(inputNome.value,inputTelefone.value);
    AtualizaTabela();    
})

function AtualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AdicionaLinha(nomelinha, telefonelinha){
    linha = '<tr>'
    linha += '<td>' + nomelinha + '</td>';
    linha += '<td>' + telefonelinha + '</td>';
    linha += '<td><img src="./images/lixeira.jpg" alt="lixeira" id="'+ IdLinha +'" class="lixeira" onclick="ApagaLinha(event.target,' + IdLinha + ')" /></td>';
    linha += '</tr>';

    linhas += linha; 
    IdLinha += 1; 

    ArrayCompleto.push({nome:nomelinha,telefone:telefonelinha});   

    inputNome.value = '';
    inputTelefone.value = '';
}

function AtualizaLinha(nomelinha, telefonelinha, indice){
    linha = '<tr>'
    linha += '<td>' + nomelinha + '</td>';
    linha += '<td>' + telefonelinha + '</td>';
    linha += '<td><img src="./images/lixeira.jpg" alt="lixeira" id="'+ indice +'" class="lixeira" onclick="ApagaLinha(event.target,' + indice + ')" /></td>';
    linha += '</tr>';

    linhas += linha; 
    IdLinha += 1; 
}

function ApagaLinha(elementoClicado, IdLinha) {
    let NomeAtualizado = '';
    let TelefoneAtualizado = '';

    elementoClicado.closest("tr").remove();

    linhas = '';
    linha = '';  

    ArrayCompleto.splice(IdLinha,1);

    ArrayCompleto.forEach(function (item, indice, array) {
        NomeAtualizado = item.nome;
        TelefoneAtualizado = item.telefone;
        AtualizaLinha(NomeAtualizado,TelefoneAtualizado, indice);
      });

      AtualizaTabela(); 
};

    

