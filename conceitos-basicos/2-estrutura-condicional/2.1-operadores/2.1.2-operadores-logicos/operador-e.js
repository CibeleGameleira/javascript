let temChinelo = true;
let temRoupaLimpa = true;

if (temChinelo && temRoupaLimpa) {
    console.log("ir ao mercado");
}

temChinelo = false;
if (temChinelo && temRoupaLimpa) {
    console.log("não ir ao mercado");
}

temRoupaLimpa = false;
if (temChinelo && temRoupaLimpa) {
    console.log('não ir ao mercado');
}