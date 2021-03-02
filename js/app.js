console.log('❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎❤︎');
console.log('KONMARI');
console.log('☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☁︎☠☠☠☠☠☠☠☠☠☠☠☠');


function saludar() {
  //forma nativa austera
  /* 
    alert("BIENVENIDAS MUJERES EMPRENDEDORAS!!");
  */
 //forma customizada más estilo
  Swal.fire(
    {
      position: 'top-end',
      icon: 'success',
      title: 'BIENVENIDAS MUJERES EMPRENDEDORAS!!',
      showConfirmButton: false,
      timer: 3000
    }
  );
}
/* *************************************
  *************************************

  FORMA AUSTERA Y NATIVA DE TODO UN PROMPT

  *************************************
  *************************************

*/
//declaro una ventana para que el usuario ingrese datos y lo almaceno en una variable
/* var nombre = prompt("Ingresa tu nombre :");
//imprimo la variable
//concateno por medio de coma por que es funcion
console.log("Bienvenido ",nombre);
//recupero elemento de html por medio de l manipulación del DOM y la funcion que trae ya cargado el objeto global
var saludo = document.getElementById("saludoElementoDeHTML");
// contateno (suma de productos por el signo) y almaceno en una caja
var saludoEnPantalla = "Bienvenida " + nombre;
// imprimo valor de caja (saludoEnPAntalla)
console.log(saludoEnPantalla);
// envio al html la varible saludoEnPantalla por medio del innerText (agregar contenido a una etiqueta)
saludo.innerText = saludoEnPantalla; */

/* *************************************
  *************************************

  FORMA CON MÁS ESTILO UTILIZANDO 
  SWEETALERT

  *************************************
  *************************************

*/
Swal.mixin({
  //
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: false,
  progressSteps: ['1']
}).queue([
  {
    title: 'Ingresa tu nombre'
  }
]).then((result) => {
  if (result.value) {
    const nombre = result.value
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenida',
      text:nombre,
      showConfirmButton: false,
      timer: 1500
    });
    var saludo = document.getElementById("saludoElementoDeHTML");
    var saludoEnPantalla = "Bienvenida " + nombre;
    saludo.innerText = saludoEnPantalla;
  }
});




function info() {
  /* *************************************
    *************************************
  
    FORMA AUSTERA Y NATIVA CONFIM
  
    *************************************
    *************************************
  
  */
  /* console.log("llamnado a info");

  var res = confirm(' ¿Deseas saber acerca de autonomía económica de las mujeres ?');
  if (res) {
    alert("Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi rem eum vitae corporis! Corporis, cupiditate delectus eius quidem sit dolores cum officia iusto excepturi architecto incidunt consequatur iure eveniet temporibus dolore voluptates minima facilis amet optio est rerum suscipit ad aperiam. Voluptatem, magni doloribus ipsa nam error amet sit.");
  } */


/* *************************************
    *************************************
  
    FORMA Custom más style, más interactiva
  
    *************************************
    *************************************
  
  */

  Swal.fire({
    title: '¿Deseas saber acerca de autonomía económica de las mujeres ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#D980FA',
    cancelButtonColor: '#12CBC4',
    confirmButtonText: 'Si',
    cancelButtonText:'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: 'top-start',
        icon: 'success',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi rem eum vitae corporis! Corporis, cupiditate delectus eius quidem sit dolores cum officia iusto excepturi architecto incidunt consequatur iure eveniet temporibus dolore voluptates minima facilis amet optio est rerum suscipit ad aperiam. Voluptatem, magni doloribus ipsa nam error amet sit.',
        showConfirmButton: true
      })
    }
  })
}

