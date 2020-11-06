import { createRef } from "react";
import { Vector3 } from "three";
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
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 },
  ],
  top: createRef(),
};

export default state;
