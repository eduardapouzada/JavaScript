document.addEventListener("DOMContentLoaded", function() {
    let modal = document.querySelector('.modalright');
    let interface = document.querySelector('.interface')
    let menu = document.querySelector('.modalright')
    let open = document.querySelector('.icon-menu-open');
    let close = document.querySelector('.icon-menu-close');
    
    modal.style.display = 'none'

    open.addEventListener('click', function(){
        menu.style.display = 'block';
        open.style.display = 'none';
        interface.style.display = 'grid'
        interface.style.gridTemplateColumns = "2fr 0.4fr";
        setTimeout(() => {
            modal.classList.add('show');
        }, 100); 

    })

    close.addEventListener('click', function(){
        menu.style.display = 'none';
        open.style.display = 'block';
        interface.style.gridTemplateColumns = '2fr 0.1fr';
        modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 500);

    })
});