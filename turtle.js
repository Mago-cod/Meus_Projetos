const btnMenu=
document.getElementById('btn-menu');
    const navMenu=
    document.querySelector('nav');

    //Alterna a visibilidade do menu ao clicar no botão

btnMenu.addEventListener("click",() => {
    navMenu.classList.toggle('ativo');
});

    //Fecha o menu ao clicar na tela fora

document.addEventListener('click',(Event) => 
{
    const clicaFora = !
    navMenu.contains(Event.target) && !
    btnMenu.contains(Event.target);
        if(clicaFora) {
            navMenu.classList.remove('ativo');
        }
});

