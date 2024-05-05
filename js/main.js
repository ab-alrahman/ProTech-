let buttonMenu = document.getElementById("icon");
let menu = document.getElementById("menu");
buttonMenu.onclick = function(){
    menu.style.cssText = `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: rgba(151, 71, 71, 1);
    z-index : 1;
    `;
}
// buttonMenu.onclick = function(){
//     menu.style.cssText =`
//     width :0;
//     `;
// }