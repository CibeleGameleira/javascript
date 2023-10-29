// Declarando duas variaveis com escopo de bloco global e atribuindo valores a elas
let macho = 'gabriel';
let femea = 'cibele';

// Declarando um escopo de bloco local e declarando a variavel dentro dele.
{ let animal = 'pinguim'; }

// Declarando uma variavel com escopo de bloco global, está ERRADO pois há uma variavel embaixo escrita com var, que nao tem escopo de bloco.
let animal = 'koala';

// Declarando duas variaveis com escopo de bloco local e atribuindo valores a elas
{ let animal = 'pinguim'; }

{ const animal = 'urso'; }

// Declarando uma variavel com escopo de bloco local, e declarando outro escopo de bloco local dentro dele, e atribuindo valores.
{ {var animal = 'leao'; }}

{
    let animal = 'panda';
    {
        let animal = 'pantera';
    }
}



