// Llamar archivo Json con async

const consultarMenus = async () => {
  const response = await fetch("./menus.json");
  const menus = await response.json();
  return menus;
};

const menus = consultarMenus();
const countCarrito = document.querySelector("#countCarrito");
const btnFinalizar = document.querySelector("#btn-finalizar");
const catmenu1 = document.querySelector("#menu1");
const catmenu2 = document.querySelector("#menu2");
const catmenu3 = document.querySelector("#menu3");
const catmenu4 = document.querySelector("#menu4");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const menusContainer = document.querySelector(".menus__container");

consultarMenus().then((menus) => {
  const reserva = document.querySelector("#opciondatosReserva").style.display = `block`;

  menus.forEach((menu) => {
    menusContainer.innerHTML += `<div class="menu__card">
        <h3> ${menu.opcion}</h3>
        <img src="${menu.imagen}"/>
        <div>
        <p class="valor_precio" > ${menu.segundoplato}</p>
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
    menus = menus.filter((menu) => menu.categoria === opcion);
    menus.forEach((y) => {
      menusContainer.innerHTML += `<div class="menu__card" >
            <h3>${y.segundoplato}...</h3>
            <img src="${y.imagen}" />
            <div>
            <p class="valor_precio">$${y.valor}</p>
            <a href='#' class='btn-primary agregar-favorito' id='${y.id}'>QUIERO</a>
            </div>
            
          </div>`;
    });
    btnQuiero(menus);
  });
}

function btnQuiero(menus) {
  const btnAgregar = document.querySelectorAll(".agregar-favorito");

  btnAgregar.forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      const menuSeleccionado = menus.find((men) => men.id === parseInt(btn.id));
      const menuCarrito = { ...menuSeleccionado, cantidad: 1 };
      const indexCarrito = carrito.findIndex(
        (men) => men.id === menuCarrito.id
      );
      if (indexCarrito === -1) {
        carrito.push(menuCarrito);
      } else {
        carrito[indexCarrito].cantidad++;
      }
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
      imprimirCarrito();
    };
  });
}

function actualizarCarrito() {
  countCarrito.innerHTML = carrito.length;
}

function imprimirCarrito() {
  const reserva = document.querySelector("#opciondatosReserva").style.display='none';
  
  listaCarrito.innerHTML = "";
  carrito.forEach((item) => {
    listaCarrito.innerHTML += `<li><div><img src="${item.imagen}" /> ${
      item.opcion
    } x ${item.cantidad}</div> <div>$${
      item.cantidad * item.valor
    }<i class='bx bxs-trash' data-id='${item.opcion}'></i></div></li>`;
  });
  if (carrito !== []) {
    const btnEliminar = document.querySelectorAll(".bxs-trash");
    btnEliminar.forEach((btn) => {
      btn.onclick = (e) => {
        const menuId = e.target.getAttribute("data-id");
        carrito = carrito.filter((men) => men.id != menuId);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
        imprimirCarrito();
        document.querySelector("#contenedorPrincipal").style.display='none'
      };
    });
  }
  crearTotal();
}

function crearTotal() {
  sumatotal = 0;
  carrito.forEach((menu) => {
    sumatotal += menu.valor * menu.cantidad;
  });
  const total = document.querySelector("#total");

  sumatotal !== 0 ? carritoLleno() : carritoVacio();
}

function carritoLleno() {

  total.innerHTML = `<span class="totalfinal" >El total es de $${sumatotal}</span>`;
  btnFinalizar.style.display = "block";
}



function carritoVacio() {
  total.innerHTML = `No hay menu selecionado`;
  btnFinalizar.style.display = "none";
}

function finalizarQuiero() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
  imprimirCarrito();
  carritoVacio();
  
  }

/* btnFinalizar.addEventListener("click", finalizarQuiero)*/

btnFinalizar.onclick = ()  => {
  swal.fire ({
title: 'Elegiste el Menu correctamente',
text: 'Pronto llegara a su mesa el pedido',
toast: true,
background: '#336633',
color: 'white',


  })

  finalizarQuiero();

}

actualizarCarrito();
imprimirCarrito();



catmenu1.addEventListener("click", () => buscarCategoria("pastas"));
catmenu2.addEventListener("click", () => buscarCategoria("ensalada"));
catmenu3.addEventListener("click", () => buscarCategoria("sopa"));
catmenu4.addEventListener("click", () => buscarCategoria("hamburguesa"));
