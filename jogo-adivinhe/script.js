document.addEventListener('DOMContentLoaded', function(){

    var aleatorio = Math.floor(Math.random() * 100) + 1; 
    var contagem = 1;

    var botao = document.querySelector('.input_button')
    var input = document.querySelector('.input_palpite')

    var palpites = document.querySelector('.palpites');

    var divColor = document.querySelector('.color');
    var button_reiniciar = document.querySelector('.button_reiniciar');

    var baixoOuAlto = document.querySelector('.baixoOuAlto');

    botao.addEventListener('click', function(){
        var palpite = Number(input.value);
        
        if (contagem === 1){
            palpites.innerHTML = 'Palpites anteriores: '
            
        }
        
        if (contagem <=  10){
            contagem += 1
            palpites.innerHTML += palpite + ', ';

            if (palpite === aleatorio){
                divColor.innerHTML = 'Parabéns, você acertou!!';
                divColor.style.background = 'green';
                divColor.style.color = 'white'
                baixoOuAlto.innerHTML = ''
                botao_reiniciar()
                
            }else{
                var restam = 11
                restam -= contagem
                divColor.innerHTML = 'Errado!!! Restam ' + restam + ' tentativas.' 
                divColor.style.background = 'red'
                divColor.style.color = 'white'

                if (palpite > aleatorio){
                    baixoOuAlto.innerHTML = 'Seu ultimo palpite foi muito alto!'
                }else{
                    baixoOuAlto.innerHTML = 'Seu ultimo palpite foi muito baixo!'

                }

            }


        }else{
            divColor.innerHTML = 'Suas tentativas acabaram! Reinicie o jogo para jogar novamente.'
            divColor.style.background = 'gray'
            divColor.style.color = 'black'
            botao_reiniciar()
        }

    
    })

    function reiniciar(){
        aleatorio = Math.floor(Math.random() * 100) + 1; 
        contagem = 1;
        palpite = '';
        input.value = '';
        palpites.innerHTML = '';
        divColor.innerHTML = '';
        divColor.style.background = '' 
        button_reiniciar.innerHTML = ''
    }

    function botao_reiniciar(){
        button_reiniciar.innerHTML = '<input type="button" value="Reiniciar o jogo" class="reiniciar">'
        button_reiniciar.addEventListener('click', function(){
            reiniciar()

        })
    }
})  