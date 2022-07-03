/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let anio = 2022;
  datosPersona.nombre = prompt("Ingrese su nombre.");
  datosPersona.edad = anio - parseInt(prompt("Ingrese su anio de nacimiento."));
  datosPersona.ciudad = prompt("Ingrese su ciudad donde vives.");
  let leGustaJS = confirm("Le gusta JavaScript?");
  leGustaJS === true ? datosPersona.interesPorJs = "Si" : datosPersona.interesPorJs = "No";
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const completarNombre = document.querySelector("#nombre");
  const completarEdad = document.querySelector("#edad");
  const completarCiudad = document.querySelector("#ciudad");
  const completarInteresEnJS = document.querySelector("#javascript");
  completarNombre.innerHTML = datosPersona.nombre;
  completarEdad.innerHTML = datosPersona.edad;
  completarCiudad.innerHTML = datosPersona.ciudad;
  completarInteresEnJS.innerHTML = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const container = document.querySelector('#fila');
  const itemComponent = item => `
<div class = "caja">
  <img src = "${item.imgUrl}" alt = "${item.lenguajes}">
  <p class = "lenguajes">${item.lenguajes}</p>
  <p class = "bimestre">${item.bimestre}</p>
</div>
`;
  container.innerHTML = "";
  listado.forEach(materia => {
  container.innerHTML += itemComponent(materia)
  })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const cambiarTema = document.querySelector("#sitio");
  cambiarTema.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const visualizar = document.querySelector("#card");
const sobreMi = document.querySelector("#sobre-mi");
window.onkeypress = function(e){
  console.log(e);
  e.key.toLowerCase() === 'f' ? sobreMi.classList.remove("oculto") : "";
}
/*window.addEventListener("keypress", function(e){
  e.key.toLowerCase() === 'f' ? sobreMi.classList.remove("oculto") : "";
})*/