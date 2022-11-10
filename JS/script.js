const stockProductos = [
    {
      id: 1,
      nombre: "Iphone 11",
      cantidad: 1,
      precio: 120000,
      img: "img/iphone 11.jpg",
    },
    {
      id: 2,
      nombre: "Iphone 12",
      cantidad: 1,
      precio: 157000,
      img: "img/iphone 14.jpg",
    },
    {
      id: 3,
      nombre: "Iphone 13",
      cantidad: 1,
      precio: 220000,
      img: "img/iphone 13.jpg",
    },
    {
      id: 4,
      nombre: "Iphone 14",
      cantidad: 1,
      precio: 300500,
      img: "img/iphone 14.jpg",
    },
    
  ];
  let carrito = [];
  
  const contenedor = document.querySelector("#contenedor");
  const carritoContenedor = document.querySelector("#carritoContenedor");
  const vaciarCarrito = document.querySelector("#vaciarCarrito");
  const precioTotal = document.querySelector("#precioTotal");
  
  
  document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    mostrarCarrito(); 
  
  });
  
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
  
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "¡Su compra fue realizada con exito!",
        icon: "success",
        confirmButtonText: "Finalizar",
    })}
  });
  
  stockProductos.forEach((prod) => {
    const { id, nombre, precio, img, cantidad } = prod;
    contenedor.innerHTML += `
     <div class="card mt-1" style="width: 21rem;">
     <img class="card-img-top" src="${img}" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${nombre}</h5>
       <p class="card-text">Precio: ${precio}</p>
       <p class="card-text">Cantidad: ${cantidad}</p>
       <button class="btn btn-primary" onclick="agregarProducto(${id})">Agregar al carrito</button>
     </div>
   </div>
     `;
  });
  
  function agregarProducto(id){
    
    const existe = carrito.some(prod => prod.id === id)
    
    if(existe){
      const prod = carrito.map(prod => {
        if(prod.id === id){
          prod.cantidad++
        }
      })
    } else {
      const item = stockProductos.find((prod) => prod.id === id);
      carrito.push(item);
    }
    
    mostrarCarrito();
  };
  
  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, img, cantidad } = prod;
      modalBody.innerHTML += 
      `<div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"onclick="eliminarProducto(${id})">Eliminar producto</button>
      </div>
      </div>`;
    });


    if (carrito.length === 0) {
      modalBody.innerHTML = `
      <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
      `;
    } else {
    }
    carritoContenedor.textContent = carrito.length;
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  
    guardarStorage();
  };
  
  function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  
  function eliminarProducto(id) {
    const celularId = id;
    carrito = carrito.filter((celular) => celular.id !== celularId);
    mostrarCarrito();
  }
  