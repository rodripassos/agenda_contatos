const form = document.getElementById("form-cadastro");
let linhas = '';

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
    
    AdicionaLinha();
    AtualizaTabela();
    
})

function AtualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AdicionaLinha(){
    let linha = '<tr>'
    linha += '<td>' + inputNome.value + '</td>';
    linha += '<td>' + inputTelefone.value + '</td>';
    linha += '<td><img src="./images/lixeira.jpg" alt="lixeira" id="lixeira" class="lixeira" onclick="ApagaLinha(event.target)" /></td>'
    linha += '</tr>';

    linhas += linha;   

    inputNome.value = '';
    inputTelefone.value = '';
}

function ApagaLinha(elementoClicado) {
    elementoClicado.closest("tr").remove();
    primeiralinha = '';
    const ContatosCadastrados = document.getElementsByName('contatos-cadastrados');
    ContatosCadastrados.forEach(parent => {
    const corpoTabela = document.querySelector('tbody');
    
    //Como transformar o elemento tbody em codigo escrito(string), retirar as tags tbody dessa string e atualizar a variavel linhas?
    // Se não fizer isso, se apagarmos uma linha e depois inserirmos outra, a linha apagada retorna à tela
    console.log(corpoTabela);
});
}
    

