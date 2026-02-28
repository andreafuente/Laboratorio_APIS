import {filtradoPersonajes, personajesUrl } from "./motor";
import { baseUrl } from "./model";

  describe("personajesUrl", () => {

    it("devuelve /personajes cuando no hay nombre", () => {
      // Given
      const nombre = "";

      // When
      const url = personajesUrl(baseUrl, nombre);

      // Then
      expect(url).toBe("http://localhost:3000/personajes");
    });

    it("devuelve URL con nombre_like cuando hay filtro", () => {
      // Given
      const nombre = "morta";

      // When
      const url = personajesUrl(baseUrl, nombre);

      // Then
      expect(url).toBe(
        "http://localhost:3000/personajes?nombre_like=morta"
      );
    });
  });

  describe("filtradoPersonajes", () => {

    it("devuelve personajes filtrados por nombre", async () => {
      // Given
      const nombre = "morta";

      // When
      const personajes = await filtradoPersonajes(baseUrl, nombre);

      // Then
      expect(personajes).toEqual([
         {
              id: "1",
              nombre: "Mortadelo",
              apodo: "Mortadelo",
              especialidad: "Disfraces",
              habilidades: ["Camuflaje", "Imitaciones", "Huida rápida"],
              amigo: "Filemón",
              imagen: "mortadelo.webp",
            }
      ]);
    });
  });