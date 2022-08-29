//declarando variáveis e a lista vazia que vao ser utilizadas embaixo
lista = [];
let cont = 0;
let addIndex = 0;
//Função que vai recuperar os dados do input de data e nome da atividade
function addDados() {
    data = document.querySelector(".data").value;
    let nome = document.querySelector(".nome").value;
    lista.push(data);
    //Estava com problema para inserir um novo dia, entao fiz uma lista e verifiquei o se o digito era diferente do anterior
    // se for diferente do anterior ele vai adicionar outra data com o indice aumentado
    if (lista[lista.length - 1] !== lista[lista.length - 2]) {
        addIndex++;
        addIndex.toString;
        document.querySelector(".addDia").innerHTML += `<div class="add${addIndex}">${data}</div>`; //
    } // esse querySelector é para receber e junto ao innerHTML adicionar a data + o nome e o icone de X, para cancelar a tarefa. 
    document.querySelector(`.add${addIndex}`).innerHTML += `<div class="add"><span>${nome}</span> <ion-icon onclick="deletarTarefa(this)" name="close-circle"></ion-icon> </div>`;
}
//funçao que usei para deletar o lembrete. Tem 2 removeChild porque assim ele remove o nome do lembrete e o X junto.
function deletarTarefa(esseBotao) {
    const pai = esseBotao.parentNode;
    pai.removeChild(pai.children[0]);
    pai.removeChild(pai.children[0]);
}