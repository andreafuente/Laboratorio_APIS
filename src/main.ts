import { Personaje, baseUrl } from "./model";
import { formulario, input, contenedor, mostrarPersonajes } from "./ui";
import { filtradoPersonajes } from "./motor";


export const cargarYMostrar = async (nombre?: string) => {
  try {
    const datos: Personaje[] = await filtradoPersonajes(baseUrl, nombre);
    if (contenedor !== null && contenedor !== undefined && contenedor instanceof HTMLElement) { 
    mostrarPersonajes(contenedor, datos);
    }
  } catch (error) {
    console.error("Error al filtrar personajes:", error);
    if (contenedor !== null && contenedor !== undefined && contenedor instanceof HTMLElement) { 
    contenedor.textContent = "No se pudieron cargar los personajes.";
  }
};
};

cargarYMostrar();

const handleFiltrar = (event: Event): void => {
  event.preventDefault();

  if (input !== null && input !== undefined && input instanceof HTMLInputElement) {
  const nombre = input.value;
  cargarYMostrar(nombre);
};
}
if (formulario !== null && formulario !== undefined && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", handleFiltrar);
}
