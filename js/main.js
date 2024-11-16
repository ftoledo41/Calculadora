d = document;

const botones = d.querySelectorAll("button");
// Obtener valor del campo input
const valEntrada = d.getElementById("resultado");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", () => {
    const valorBoton = botones[i].textContent;

    // validaciones
    if (valorBoton === "C") borrarResultado();
    else if (valorBoton === "=") calcularResultado();
    else anexarValor(valorBoton);
  });
}

function borrarResultado() {
  valEntrada.value = "";
}

function anexarValor(valorBoton) {
  valEntrada.value += valorBoton;
}

function calcularResultado() {
  valEntrada.value = eval(valEntrada.value);
}


// Como funciona eval
// let resultado2 = eval("2+2");
// console.log(resultado2)