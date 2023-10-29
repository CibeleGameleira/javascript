/**
 * O que é uma variável?
 * Um lugar onde armazena dados.  
 * obs: dados = menor parte de uma informação 
 * De forma genérica, como construir uma variável
 *  É preciso o escopo e o identificador.
 * Para fazer uma atribuição, você pega o identificador, o sinal de atribuição e o dado.
 * Para declarar uma variável no javascript:
 * */

// Declarando a variavel animal, e atribuindo uma cadeia de caracteres/string com o valor cachorro
var animal = 'cachorro';//string

//Sobreescrevendo a variavel animal e atribuindo uma cadeia de caracteres/string com o valor pelter shihtzu
var animal = "pelter shih tzu";

// Declarando a variável celular e atribuindo uma cadeia de caracteres/string com o valor iphone
var celular = `iphone `;

// Declarando a variavel quantidade de chocolates e atribuindo uma quantidade de chocolates 16
var quantidadeDeChocolates = 16;

// Declarando a variavel dinheiro na conta e atribuindo o dinheiro na conta no valor de 741.30
var dinheiroNaConta = 741.30;

// Declarando a variavel doenças pré existentes e atrbuindo o valor booleano falso 
var doencasPreExistentes = false;

//Declarando a variavel limite no cartão e atrbuindo o valor booleano verdadeiro 
var limiteNoCartao = true;

// Declarando a variavel cores e atribuindo os valores roxo, rosa, azul e laranja - Array
var cores = ['Roxo', 'Rosa', `Azul`, "Laranja"]; //array

//Declarando a variavel de numeros e atribuindo valores numericos.
var numeros = [666, 123, 54321, 4002];//array

//Declarando a variavel de numeros irracionais e atribuindo valores numericos.
var numerosIrracionais = [1.42, 55.5, 98.70]; //array

//Declarando a variavel e atribuindo valores booleanos.
var valoresBooleanos = [false, true, true, false]; //array

//Declarando variaveis a atribuindo os valores de nomes de pessoas.
var pessoas = ['Gabriel', 'Cibele', 'Pelter']; //array

//Declarando variavel e atribuindo um array de objetos.
var pessoas = [{
    nome: 'Renata'
}, {
    apelido: 'joaozinhu'
},
{
    bichoDeEstimacao: 'Pelter',
    cor: 'branco',
    brinquedosPreferidos: ['pato amigo', 'baleinha'],
    dentes: {
        cor: 'branco',
        afiados: true,
        tortinhos: true,
    }
},
{ carro: 'civic', }
]

//Declarando variavel com um objeto, com atributos nome, altura, idade, gostaDeBrocolis, membrosDoCorpo.
var pessoa = {
    nome: 'Cibele',
    altura: 1.62,
    idade: 20,
    gostaDeBrocolis: false,
    membrosDoCorpo: ['Braços', 'Pernas', 'Olhos'],
}
