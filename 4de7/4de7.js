   
   var numRandom = Math.floor(Math.random() * 10) + 0
   console.log(numRandom)

    var palpites = document.querySelector('.palpites')
    var ultimoResultado = document.querySelector('.ultimoResultado')
    var baixoOuAlto = document.querySelector('.baixoOuAlto');

    var envioPalpite = document.querySelector('.envioPalpite');  
    var campoPalpite = document.querySelector('.campoPalpite'); 

    var contagemPalpites = 1; // conta o palpite para limitar em 10 
    var botaoReinicio; 
    
    envioPalpite.addEventListener('click', conferirPalpite);

    function conferirPalpite (){
        var palpiteUsuario = Number(campoPalpite.value);
        // Number garante que a entrada de dado é um número
        // a variável palpiteUsuario é igual ao número que é inserido no campo
        if (contagemPalpites == 1){
            palpites.textContent = 'Palpites anteriores: ';
            // início dos palpites
            // garante que esse texto aparecerá apenas na primeira tentativa, não em todas as tentativas
        }

        if (palpiteUsuario > 10 || palpiteUsuario < 0) {
            alert('Ei! Você tem que entrar com um valor válido')
            contagemPalpites --;
        }
        else{
            palpites.textContent = palpites.textContent + palpiteUsuario + ' ';
            // mostra a lista de palpites anteriores
            // concatena a última atualização de string com o novo palpite 
            if (palpiteUsuario === numRandom){// Caso que acerta
                ultimoResultado.textContent = 'Parabéns! Você acertou!'
                ultimoResultado.style.color = "lightgreen"
                baixoOuAlto.textContent = ' ' // limpa o conteúdo
                fimJogo();
            } else if (contagemPalpites === 3){ // Caso que acaba chances
                baixoOuAlto.textContent =' ' 
                ultimoResultado.textContent = 'Não há mais tentativas!'
                fimJogo();
            }else{ // Tentativas falhas 
                ultimoResultado.textContent = 'Errou!'
                ultimoResultado.style.color = "red"
                if (palpiteUsuario < numRandom){
                    baixoOuAlto.textContent = 'Palpite muito baixo'
                } else {
                    baixoOuAlto.textContent = 'Palpite muito alto'
                }
    
            }
    
        }
        contagemPalpites ++; 
        campoPalpite.value = ''; 
        campoPalpite.focus(); 

    }

    function fimJogo (){
        campoPalpite.disabled = true;
        envioPalpite.disabled = true;
        // desabilita o campo e o botão, para o usuário não enviar mais dados e ter mais tentativas 

        botaoReinicio = document.createElement('button')
        botaoReinicio.textContent = 'Novo Jogo'

        document.body.appendChild(botaoReinicio) 
        botaoReinicio.addEventListener('click', novoJogo)
    }

    function novoJogo (){
        contagemPalpites = 1; // volta a contar 

        var reiniciarParas = document.querySelectorAll('.resultadoParas p')
        
        for (var i = 0; i < reiniciarParas.length; i++){
            reiniciarParas[i].textContent = ''
        }
        // limpa os textos

        botaoReinicio.parentNode.removeChild(botaoReinicio);  
        // remove o botão anterior de 'novo jogo' na página 

        campoPalpite.disabled = false;
        envioPalpite.disabled = false; 

        //habilita os campos novamente 

        campoPalpite.focus();

        numRandom = Math.floor(Math.random() * 10) + 0
        console.log(numRandom)
    }

