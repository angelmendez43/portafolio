let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open'); 
let toggle_close = document.getElementById('toggle_close'); 

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show-menu');
    if(menu.classList.contains('show-menu')){
        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';
    }
else{
    toggle_open.style.display = 'block';
    toggle_close.style.display = 'none';

}
}

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLinks =>{
    menuLinks.addEventListener("click",function(){
        menu.classList.remove("show-menu");
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none';
    })

})