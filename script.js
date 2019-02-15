const hamburguer = document.querySelector('[menu-button');
const menuItens = document.querySelector('[menu-itens]');
const toggleMenu = () => {
    console.log('pao')
    menuItens.classList.toggle('esconde')
} 

hamburguer.onclick = toggleMenu;