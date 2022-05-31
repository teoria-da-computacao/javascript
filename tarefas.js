
document.addEventListener('DOMContentLoaded', function () {
    
    const nova = document.querySelector('#nova-tarefa');
    const botao = document.querySelector('#botao');

    botao.disabled = true;

    document.querySelector('#nova-tarefa').onkeyup = () => {
        if (nova.value.length > 0) {
            botao.disabled = false;
        } 
        else {
            botao.disabled = true;
        }
    }



    document.querySelector('#botao').onclick = function() {
        
        // console.log(nova.value);

        if (nova.value.length > 0) { // ou   (nova.value != '') {     
            const li = document.createElement('li');
            li.innerHTML = nova.value;
            const ul = document.querySelector('#lista');
            ul.append(li);
    
            nova.value = '';       
        }
        // evita que envie o formulario e carregue a pagina novamente
        return false;
    }

});
