
// Llamar archivo Json con async

const consultarMenus = async () => {
    const response = await fetch ("./menus.json");
    const menus = await response.json ();
    return menus;
};

const menus = consultarMenus ();
const countCarrito = document.querySelector ("#countCarrito");
const btnFinalizar = document.querySelector ("#btn-finalizar");
const catmenu1 = document.querySelector ("#menu1");
const catmenu2 = document.querySelector ("#menu2");
const catmenu3 = document.querySelector ("#menu3");
const catmenu4 = document.querySelector ("#menu4");

let carrito = JSON.parse (localStorage.getItem ("carrito")) || [];

const menusContainer = document.querySelector (".menus_container");

consultarMenus ().then((menus) => {
    menus.forEach((menu) => {
        menusContainer.innerHTML += `<div class="menu__card">
        <h3> ${menu.opcion}</h3>
        <img src="${menu.imagen}"/>
        <div>
        <p class="valor_precio" > $${menu.valor}</p>
        <a href='#' class='btn-primary agregar-favorito' id='${menu.id}'>QUIERO</a>
        </div>
      </div>`;
      });
      btnQuiero(menus);
    });
    
    function buscarCategoria(opcion) {
        menusContainer.innerHTML = "";
        consultarMenus().then((menus) => {
          menus = menus.filter((menu) => menu.opcion === opcion);
          menus.forEach((y) => {
            menusContainer.innerHTML += `<div class="menu_card" >
            <h3>${y.segundoplato}...</h3>
            <img src="${y.imagen}" />
            <div>
            <p class="valor_precio">$${y.valor}</p>
            <a href='#' class='btn-primary agregar-favorito' id='${y.opcion}'>QUIERO</a>
            </div>
            
          </div>`;
          });
        });
      }
   
