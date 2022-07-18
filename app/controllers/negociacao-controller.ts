import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes(); // já instancio ele pq quero que inicie vazio
    private negociacoesView = new NegociacoesView (`#negociacoesView`);
    private mensagemView = new MensagemView('#mensagemView');
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao); // na hora que eu chamo a variável negociacoes.adiciona, ele automaticamente instacia Negociacoes, pois se não for instanciada, não consigo usar o método adiciona
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
        this.limparFormulario(); // depois de exibir no console eu limpo
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g; // pego tudo o que é -, não só o primeiro ou o segundo, mas tudo, por isso o g de global
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor); // o próprio método faz a instanciação da Negociacao
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}