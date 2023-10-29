const votosLula = 59563912;
const votosBolsonaro = 57675427;

//Declarando uma estrutura condicional e validando se os votos do lula foram maiores que o do bolsonaro.
//True 

if (votosLula > votosBolsonaro) {
    console.log('o amor venceu');
};

//Declarando uma estrutura condicional e validando se os votos do lula foram menores do que o do bolsonaro.
//False
if (votosLula < votosBolsonaro) {
    console.log("mito mito mito");
};

//Declarando uma estrutura condicional e validando se os votos do lula foram iguais ao do bolsonaro.
//False
if (votosLula == votosBolsonaro) {
    console.log(`o brasil venceu`);
};

const temperaturaCorporal = 37;
const temperaturaFebre = 38;
const temperaturaNormal = 37;

//Declarando a condicional if e validando se a temperatura corporal é maior ou igual à temperatura de uma febre.
//False
if (temperaturaCorporal >= temperaturaFebre) {
    console.log('estou tendo falencia multipla de orgaos');
};

//Declarando a condicional if e validando se a temperatura corporal é menor ou igual que uma temperatura normal.
//True
if (temperaturaCorporal <= temperaturaNormal) {
    console.log(`ta tranquilo ta favoravel`);
};


const climaBom = 'ensolarado';
const climaRuim = 'chovendo';

//Declarando a condicional if e validando se o clima bom é diferente do clima ruim.
//True
if (climaBom != 'chovendo') {
    console.log('lavar roupa');
};

const torcidaOrganizada1 = 'mancha verde';
const torcidaOrganizada2 = 'torcida jovem';

//Declarando a condicional if e validando se a torcida organizada 1 é diferente da torcida organizada 2.
//True
if (torcidaOrganizada1 != torcidaOrganizada2) {
    console.log('pau neles');
};

//Declarando a condicional if e validando se o brasileiro é diferente do nigeriano.
//True
if ('brasileiro' != 'nigeriano') {
    console.log('gringo');
};