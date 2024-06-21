document.addEventListener('DOMContentLoaded', function(){

    let aleatorio = Math.floor(Math.random() * 100) + 1; 
    let contagem = 1;

    let botao = document.querySelector('.input_button')
    let input = document.querySelector('.input_palpite')

    let palpites = document.querySelector('.palpites');

    let divColor = document.querySelector('.color');
    let button_reiniciar = document.querySelector('.button_reiniciar');

    let baixoOuAlto = document.querySelector('.baixoOuAlto');

    botao.addEventListener('click', function(){
        let palpite = Number(input.value);
        
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
                let restam = 11 /* Para a conta dar certo */
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
            divColor.style.background = '#7EA0B7'
            divColor.style.color = 'black'
            divColor.style.boxShadow = ' inset 1px 1px 20px #a9cef4'
            baixoOuAlto.innerHTML = ''
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
        divColor.style.boxShadow = ''
        button_reiniciar.innerHTML = ''
    }

    function botao_reiniciar(){
        button_reiniciar.innerHTML = '<input type="button" value="Reiniciar o jogo" class="reiniciar">'
        button_reiniciar.addEventListener('click', function(){
            reiniciar()

        })
    }
})  