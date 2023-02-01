//AdaKitten 2.1
'use strict';
// // Declaración de variable (const) y le decimos dónde está en html
// const form = document.querySelector('.js-new-form');
// //Volver a llamar a la variable (form)y eliminamos el collapsed, para poder ver el formulario, es decir, que sea visible
// form.classList.remove('collapsed');

//Declaramos una variable y le decimos dónde está en html. A l var la llamamos LIST pq queremos pero podría ser cons KarlaLaia, dejar list en el html como clase y aquí llamar a esta variable KarlaLaia como la clase de js que hemos puesto en el html, para indicarle quuén es:
const list = document.querySelector('.js-list');

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
class="card_img"
src="https://dev.adalab.es/sphynx-gato.webp"
alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
    Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
    hasta con pinta de alienígena han llegado a definir a esta raza
    gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

const kittenThree= `<li class="card">
<img
    class="card_img"
    src="https://dev.adalab.es/maine-coon-cat.webp"
    alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
    Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
    bella mirada se ha convertido en una de sus señas de identidad.
    Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

// Con la variable (LIST de arriba, fila 8 del js), le ponemos la info de los 3 gatos.
list.innerHTML = kittenOne + kittenTwo + kittenThree;