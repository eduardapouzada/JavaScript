document.addEventListener('DOMContentLoaded', function(){
    let button_add = document.querySelector('.button-list');
    let input_add = document.querySelector('.input-list');
    
    button_add.addEventListener('click', function(){
        let input_added = document.querySelector('.added-list');
        let tarefa = input_add.value;
        var cont = document.querySelectorAll('.added-list li').length;
        
        if (cont < 50){
            input_added.innerHTML += `
            <li>
            <input type="checkbox" class="checkbox" name="" id="">
            ${tarefa}
            <button class="button-iconTrashBin"><img src="./src/assets/icons/iconTrashBin.svg" ></button>
            </li>`;
            input_add.value = '';

            let buttons_delete = document.querySelectorAll('.button-iconTrashBin');
            buttons_delete.forEach(function(button_delete) {
                button_delete.addEventListener('click', function() {
                    let deleted = this.parentElement;
                    deleted.remove();
                });
            });
        }else{
            alert('o número disponivel de tarefas acabou');
            // adicionar uma mensagem como alert no html.
        }
    })



})