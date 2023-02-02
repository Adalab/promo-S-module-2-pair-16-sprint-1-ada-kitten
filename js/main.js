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

const KatList = document.querySelector('.js-list');
const KittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const KittenOneName = 'Anastacio';
const KittenOneDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const KittenOneRace = 'Siamés';


KatList.innerHTML =
`<li class="card">
<article>
  <img
    class="card_img" 
    src= ${KittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title"> ${KittenOneName.toUpperCase()} </h3>
  <h4 class="card_race"> ${KittenOneRace} </h4>
  <p class="card_description">
    ${KittenOneDesc} 
   </p>
</article>
</li>`;



const KittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const KittenTwoName = 'Fiona';
const KittenTwoDesc = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza    gatuna que se caracteriza por la «ausencia» de pelo.';
const KittenTwoRace = 'Sphynx';

KatList.innerHTML +=
`<li class="card">
<img
class="card_img"
src= ${KittenTwoImage}
alt="sphynx-cat"
/>
<h3 class="card_title">${KittenTwoName.toUpperCase()} </h3>
<h4 class="card_race">${KittenTwoRace} </h4>
<p class="card_description">
    ${KittenTwoDesc}
</p>
</li>`


const KittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const KittenThreeName = 'Cielo';
const KittenThreeDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad.     Sus ojos son grandes y las orejas resultan largas y en punta.';
const KittenThreeRace = 'Maine Coon';

KatList.innerHTML +=
`<li class="card">
<img
    class="card_img"
    src= ${KittenThreeImage}
    alt="maine-coon-cat"
/>
<h3 class="card_title">${KittenThreeName.toUpperCase()} </h3>
<h4 class="card_race">${KittenThreeRace} </h4>
<p class="card_description">
    ${KittenThreeDesc}
</p>
</li>`;



// KittenOneName = KittenOneName.toUpperCase();
