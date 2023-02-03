//AdaKitten 2.1
'use strict';
// // Declaración de variable (const) y le decimos dónde está en html
// const form = document.querySelector('.js-new-form');
// //Volver a llamar a la variable (form)y eliminamos el collapsed, para poder ver el formulario, es decir, que sea visible
// form.classList.remove('collapsed');

//Declaramos una variable y le decimos dónde está en html. A l var la llamamos LIST pq queremos pero podría ser cons KarlaLaia, dejar list en el html como clase y aquí llamar a esta variable KarlaLaia como la clase de js que hemos puesto en el html, para indicarle quuén es:
// const KatList = document.querySelector('.js-list');

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
// const kittenOne = `<li class="card">
// <article>
//   <img
//     class="card_img"
//     src="https://dev.adalab.es/gato-siames.webp"
//     alt="gatito"
//   />
//   <h3 class="card_title">Anastacio</h3>
//   <h4 class="card_race">Siamés</h4>
//   <p class="card_description">
//     Porte elegante, su patrón de color tan característico y sus ojos
//     de un azul intenso, pero su historia se remonta a Asía al menos
//     hace 500 años, donde tuvo su origen muy posiblemente.
//    </p>
// </article>
// </li>`;

// const kittenTwo = `<li class="card">
// <img
// class="card_img"
// src="https://dev.adalab.es/sphynx-gato.webp"
// alt="sphynx-cat"
// />
// <h3 class="card_title">Fiona</h3>
// <h4 class="card_race">Sphynx</h4>
// <p class="card_description">
//     Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
//     hasta con pinta de alienígena han llegado a definir a esta raza
//     gatuna que se caracteriza por la «ausencia» de pelo.
// </p>
// </li>`;

// const kittenThree= `<li class="card">
// <img
//     class="card_img"
//     src="https://dev.adalab.es/maine-coon-cat.webp"
//     alt="maine-coon-cat"
// />
// <h3 class="card_title">Cielo</h3>
// <h4 class="card_race">Maine Coon</h4>
// <p class="card_description">
//     Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
//     bella mirada se ha convertido en una de sus señas de identidad.
//     Sus ojos son grandes y las orejas resultan largas y en punta.
// </p>
// </li>`;

// Con la variable (LIST de arriba, fila 8 del js), le ponemos la info de los 3 gatos.
// KatList.innerHTML = kittenOne + kittenTwo + kittenThree;

const katList = document.querySelector('.js-list');
const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';


const kittenOne = 
`<li class="card">
<article>
  <img
    class="card_img" 
    src= ${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title"> ${kittenOneName.toUpperCase()} </h3>
  <h4 class="card_race"> ${kittenOneRace === ""?"Uy que despiste, no sabemos su racita jejeje, à bientôtttt!" : kittenOneRace} </h4>
  <p class="card_description">
    ${kittenOneDesc} 
   </p>
</article>
</li>`;
katList.innerHTML = kittenOne
//Hay un OPERADOR TENARIO -> ? = la pregunta en sí, es el primer if, si se cumple la primera condición (lo que va entre llaves) 
// : = else if.
// Si quitamos la raza en cualquiera de los gatos, lo que pasa es que nos devuelve el else if (como la segunda condición), que sería el mensajito de uy blablabla.

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza    gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenTwo = 
`<li class="card">
<img
class="card_img"
src= ${kittenTwoImage}
alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoName.toUpperCase()} </h3>
<h4 class="card_race">${kittenTwoRace === ""?"Uy no veas que despiste, no sabemos su racita jejeje, à bientôtttt!" : kittenTwoRace} </h4>
<p class="card_description">
    ${kittenTwoDesc}
</p>
</li>`;
katList.innerHTML += kittenTwo

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.     Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const kittenThree = 
`<li class="card">
<img
    class="card_img"
    src= ${kittenThreeImage}
    alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeName.toUpperCase()} </h3>
<h4 class="card_race">${kittenThreeRace === ""?"Uy que despistillo, no sabemos su racita jejeje, à bientôtttt!" : kittenThreeRace} </h4>
<p class="card_description">
    ${kittenThreeDesc}
</p>
</li>`;
katList.innerHTML += kittenThree
// document.querySelector es para llamarlo a HTML
//innerHTML es para llevarlo a HTML y que te de una respuesta


// kittenOneName = KittenOneName.toUpperCase(); -> Mayúsculas


const buscar = document.querySelector('.js_in_search_desc');
const valorBuscar = buscar.value;
// Si coincide una palabra que la usuaria ponga un valor y que nos lo encuentre, nos lo traerá, es como un filtro:
// if (kittenOneDesc.includes(valorBuscar) ) {
//   katList.innerHTML = kittenOne;
// } 
// if (kittenTwoDesc.includes(valorBuscar) ) {
//   katList.innerHTML = kittenTwo;
// }
// if (kittenThreeDesc.includes(valorBuscar) ) {
//   katList.innerHTML = kittenThree;
// }



