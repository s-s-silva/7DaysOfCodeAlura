const display = document.querySelector(".display"); 
const teclasNum = document.querySelectorAll("[id*=tecla]");
const teclasOP = document.querySelectorAll("[id*=operador]");

let novoNum = true;
let teclaOP;
let numAnt;

function atDisplay(texto){
    if(novoNum == true){
        display.textContent = texto; 
        novoNum = false; 
    }else{
        display.textContent = display.textContent + texto;
    }
}

const inserirNum = (event) => atDisplay(event.target.textContent);

teclasNum.forEach(function(tecla){
    tecla.addEventListener('click', inserirNum);
}); //função que permite clicar nos números e inserir os números no display */


const SelecionarOP = (event) => {
    novoNum = true;
    teclaOP = event.target.textContent;
    numAnt = display.textContent.replace(",", ".");

};

teclasOP.forEach(function(teclaOP){
    teclaOP.addEventListener('click', SelecionarOP);
});

const calcular = () => {
    if (teclaOP !== undefined) {
      const numAtu = display.textContent.replace(",", ".");
      novoNum = true;
      let resultado = eval(`${numAnt}${teclaOP}${numAtu}`);
      if (resultado.toString().includes(".")){
          resultado = resultado.toFixed(1);
      }
      atDisplay(resultado.toString().replace(".",","));
      teclaOP = undefined;
    }
  };

  //calcula
  const atvIgual = () => calcular();
  document.querySelector("#igual").addEventListener('click', atvIgual);
  
  const limparDisplay = () => (display.textContent = "");

  //limpa (CE)
  document
    .querySelector("#limparDisplay")
    .addEventListener ('click', limparDisplay);

    const limparCalculo = () => {
        limparDisplay();
        teclaOP = undefined;
        novoNum = true;
        numAnt = undefined;
    };
 
    document.querySelector("#limparCalculo").addEventListener('click', limparCalculo);

    const removUltNum = () =>{
        display.textContent = display.textContent.slice(0,-1);
    }
    document
        .querySelector("#backspace")
        .addEventListener('click', removUltNum);

    const InvNum = () =>{
        novoNum = true
        atDisplay (display.textContent * -1);
    };
    document
        .querySelector("#inverter")
        .addEventListener('click', InvNum);

    const inserirDec = () =>{
        if (display.textContent.includes(",") != true)
            if (display.textContent.length > 0)
                atDisplay(",");
            else 
                atDisplay("0,");
    }
    document
        .querySelector("#decimal")
        .addEventListener('click', inserirDec);

    


 