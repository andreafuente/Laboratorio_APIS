import { Personaje} from "./model";

export const sinEspacios = (peticion: string): string => peticion.trim(); //  Elimina los espacios al inicio y al final de la cadena

export const personajesUrl = (baseUrl: string, nombre : string): string => {
  const peticion = nombre ? sinEspacios(nombre) : ""; // ternario para manejar el caso de que nombre sea undefined o null, asignando una cadena vacía en ese caso
  if (!peticion) return `${baseUrl}/personajes`;

  return `${baseUrl}/personajes?nombre_like=${encodeURIComponent(peticion)}`;
};

export const filtradoPersonajes = async (
  baseUrl: string,
  nombre?: string
): Promise <Personaje[]> => {
  const peticion = sinEspacios(nombre ?? "");
  const url = personajesUrl(baseUrl, peticion);

  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error(`Ups! Error al obtener los personajes.`);
  }
  return respuesta.json();

};

