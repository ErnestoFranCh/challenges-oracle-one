// Amigo secreto
let listaNombres = []; // contiene los nombres ingresados por el usuario
let intentoDeLlenado = 0; // Cuando es 1 el usuario ya uso la app en una ocasion

// funcion que edita elementos del HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Funcion que limpia el input
function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

// Funcion que reinicia la app
function NuevoAmigoSecreto() {
    //Limpiar nombres
    listaNombres = [];
    //Limpiar lo que se muestra en pantalla
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    //Reinicio del contador
    intentoDeLlenado = 0;
}

function agregarAmigo() {
    //Verificamos si ya se hizo un sorteo antes
    if(intentoDeLlenado == 1) {
        NuevoAmigoSecreto(); //Llamamos a la funcion que reinicia el juego
    }
    
    let amigoNuevo = document.getElementById('amigo').value;
    
    if (amigoNuevo.trim() === "") { //Nos aseguramos de que se ingrese un valor no vacio
        alert("Favor de ingresar un nombre");
    } else {
        if (listaNombres.includes(amigoNuevo)) {//Nos aseguramos de que no hay mas de un mismo nombre
            alert("El nombre que intenta ingresar ya está en la lista, agregue un apellido o el segundo nombre del nuevo amigo.");
        } else {
            listaNombres.push(amigoNuevo); //Agregamos el nuevo nombre
            limpiarCaja();// Limpiamos input
            //Mostramos la lista de nombres
            document.getElementById('listaAmigos').innerHTML = listaNombres.map(nombre => `<li>${nombre}</li>`).join('');
/*
Usamos .map() para aplicar una funcion a cada elemento del array.
En este caso es un formato de texto `<li>${nombre}</li>`.
Usamos una funcion flecha nombre=> (equivalente a lambda en python).
Finalizamos uniendo todos los elementos del array en un string sin '' con .join('')
*/
        }
    }
}

function sortearAmigo() {
    let CantidadDeAmigos = listaNombres.length;
    
    if (CantidadDeAmigos < 2) {// Nos aseguramos de que el sorteo se pueda efectuar
        alert('Tu lista de amigos es muy pequeña, ¡añade mas amigos para sortearlos!');
    } else {
        let amigoSecreto = listaNombres[Math.floor(Math.random() * CantidadDeAmigos)];
        // Mostrar resultado en pantalla
        document.getElementById('resultado').innerHTML = `<li>Amigo secreto: <strong>${amigoSecreto}</strong></li>`;
        // Marcar que ya se hizo un sorteo
        intentoDeLlenado = 1;
    }
}