import { createRef } from "react"
//sections: 9,
//pages: 8,

const state = {
  sections: 6,
  pages: 5,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "About me",
      image: require("./assets/yo.jpg"),
      aspect: 1.51,
      text:
        "Soy Alfredo tengo 30 años, estudie y trabaje gastronomia, actualmente estudio de forma online Diseño y Desarollo web hace mas de 1 año, acualmente vivo en Buenos Aires - Argentina",
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Experiencie",
      image: require("./assets/dev-logos.png"),
      aspect: 1.5,
      text:
        "he venido trabajando con librerias y frameworks como: React, Redux, Node, Apollo, Webpack y Docker",
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Hobbies",
      image: require("./assets/alfred.jpg"),
      aspect: 1.5037,
      text:
        "me gusta salir a correr, hacer deporte, leer libros, ir a la playa , viajar, cocinar",
    },
  ],
  stripes: [
    { offset: 0, color: "#000", height: 21 },
    { offset: 6.3, color: "#000", height: 18 },
  ],

  top: createRef(),
}

export default state
