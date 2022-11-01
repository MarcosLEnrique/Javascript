let nombreProductoA = "Iphone 12"
let precioProductoA = 1000
let stockProductoA = 50

let nombreProductoB = "iphone 13"
let precioProductoB = 2000
let stockProductoB = 50

let nombreProductoC = "iphone 14"
let precioProductoC = 2000
let stockProductoC = 50

let precioTotal = 0

alert("Nuestros celulares en stock: \n - Iphone 12\n - iphone 13\n - iphone 14")

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
    
}


let cantidadCompra = parseInt(prompt("ingrese cuantos modelos distintos desea comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que modelo desea comprar: \n - Iphone 12\n - Iphone 13\n - iphone 14")
    
    if(productoCompra.toUpperCase() == "IPHONE 12"){
        let cantidadProductoIphone12 = prompt("Ingrese que cantidad de " + nombreProductoA + " desea comprar:")
        calculoStock(cantidadProductoIphone12, stockProductoA, precioProductoA)
    }
    else if(productoCompra.toUpperCase() == "IPHONE 13"){
        let cantidadProductoIphone13 = prompt("Ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        calculoStock(cantidadProductoIphone13, stockProductoB, precioProductoB)
    }
    else if(productoCompra.toUpperCase() == "IPHONE 14"){
        let cantidadProductoIphone14 = prompt("Ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        calculoStock(cantidadProductoIphone14, stockProductoC, precioProductoC)
    }
    else{
        alert("No tenemos disponible ese producto")
    }
}

if(precioTotal != 0){
    alert("El precio total de su compra es: " + precioTotal)
}
else{
    alert("¡Gracias por su visita!")

}
