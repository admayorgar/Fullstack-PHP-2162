/* id con las que trabajare:
quantity
category
    values for category:
    Estudiante
    Trainee
    Junior
mensajeTotal (div contenedor)
borrarButton
resumenButton
*/

//Variables
let selectCategory = document.getElementById("category")
let botonBorrar = document.getElementById("borrarButton")
let botonResumen = document.getElementById("resumenButton")
let quantity = document.getElementById("quantity")
let mensajeTotal = document.getElementById("mensajeTotal")

//Eventos
//addEventListener --> recibe los parametros(evento,funcion) cuando ocurra el evento se ejecuta la funcion
//selectCategory.addEventListener("click",calcular)
botonBorrar.addEventListener("click", borrar)
botonResumen.addEventListener("click", calcular)


//Funciones
function borrar(){
    document.getElementById("formulario").reset();
}

function calcular(){
    let precio = ""
    let descuento
    let precioFinal = ""

    if (selectCategory.value == "Estudiante"){
        precio = 200
        descuento = 80
    }else if (selectCategory.value == "Trainee"){
        precio = 200
        descuento = 50
    }else if (selectCategory.value == "Junior"){
        precio = 200
        descuento = 15
    }
    precio -= (precio * (descuento/100))
    precioFinal = (precio * quantity.value)

    mensajeTotal.innerHTML = `<p>Total a pagar: $${precioFinal}</p>`

}

