import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    listaDeCompras.appendChild(itemDaLista);

    verificarListaVazia();
})

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");

    itensDaLista.length === 0 ? mensagemListaVazia.style.display = "block" : mensagemListaVazia.style.display = "none";
}

verificarListaVazia();