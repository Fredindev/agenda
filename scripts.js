const form = document.getElementById('formulario');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionarLinhas();
    atualizarTabela();

});

function adicionarLinhas(){

    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (numeros.includes(inputNumero.value)){

        alert('Este contato já foi adicionado!');

    } else {
            nomes.push(inputNome.value);
            numeros.push(inputNumero.value);

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += '</tr>';
            linha += '<tr>';
            linha += `<td>${inputNumero.value}</td>`;
            linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';

};

function atualizarTabela(){

    const listaContatos = document.querySelector('table');
    listaContatos.innerHTML = linhas;
};

