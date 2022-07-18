import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";


//todas as vezes que eu submeter um form, ele chama o adiciona, portanto precido colocar o form no código
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault(); //impede o refresh da página quando o form é submetido
    controller.adiciona();

 
});