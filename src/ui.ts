import { Personaje, baseUrl } from "./model";

export const contenedor = document.querySelector("#contenedor");
if (contenedor == null || contenedor == undefined) {

  throw new Error("No se encontró el contenedor");
}

const crearCardContainer = (): HTMLElement => {
  const contenedorCard = document.createElement("article");
  contenedorCard.classList.add("card");

  return contenedorCard;
};

const crearImagen = (src: string, alt: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = src;
  imagen.alt = alt;

  return imagen;
};

  const parrafo = (etiqueta: string, contenido: string): HTMLParagraphElement => {
    const texto = document.createElement("p");

  const strong = document.createElement("strong");
  strong.textContent = `${etiqueta}:`;

  texto.append(strong, " ", `${contenido}`);

    return texto;
  };

  const datosCampos = (personaje: Personaje): Array<[string, string]> => [
  ["Nombre", personaje.nombre],
  ["Apodo", personaje.apodo],
  ["Especialidad", personaje.especialidad],
  ["Habilidades", personaje.habilidades.join(", ")],
  ["Amigo", personaje.amigo],
];

const crearCard = (personaje: Personaje, baseUrl: string): HTMLElement => {
  const card = crearCardContainer();
  const imagen = crearImagen(`${baseUrl}/${personaje.imagen}`, personaje.nombre);

  // Agregar la información del personaje a la tarjeta
  card.appendChild(imagen);
  //Para cada campo del personaje, crear los párrafos y agregarlo a la tarjeta 

  datosCampos(personaje).forEach(([etiqueta, contenido]) => {
    const parrafoInfo = parrafo(etiqueta, contenido);
    card.appendChild(parrafoInfo);
  });

  return card;
};

export const mostrarPersonajes = ( contenedor: HTMLElement, personajes: Personaje[] ): void => {
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de mostrar los personajes
  personajes.forEach((personaje) => {
    contenedor.appendChild(crearCard(personaje, baseUrl));
  });
};

//Formulario de filtrado
export const formulario = document.querySelector("#form");
if (formulario == null || formulario == undefined) {
  throw new Error("No se encontró el formulario");
}

export const input = formulario.querySelector("input");
if (input == null || input == undefined) {
  throw new Error("No se encontró el input");
}

export const boton = formulario.querySelector("button");
if (boton == null || boton == undefined) {
  throw new Error("No se encontró el botón");
}



