//Establece la diapositiva inicial del cargador
var slideIndex = 1;
//Establece en qué diapositivas se debe ocultar la barra de control principal (separar con coma)
var hiddenControlsStates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
//Establece el texto y enlace de la primera miga de pan
var initialBreadcrumbLink = {
    title: "Inicio",
    link: 1
};
//Establece los enlaces del menú principal
var mainMenuContent = `
<a href="#" onclick="currentSlide(2) " class=" list-group-item list-group-item-action">Mapa de redes</a>
<a href="#" onclick="currentSlide(3) " class=" list-group-item list-group-item-action">Elaboración de un mapa de redes de apoyo</a>
<a href="#" onclick="currentSlide(8) " class=" list-group-item list-group-item-action">Para tener en cuenta</a>
<a href="#" onclick="currentSlide(9) " class=" list-group-item list-group-item-action">Instrucciones para el diligenciamiento con los estudiantes</a>
`;
//Establece la estructura del proyecto y los nombres de los módulos y los capítulos en la miga de pan
slidesContentArray = {
    "0": "s_1.js",
    "1": "s_2.js",
    "2": "s_3.js",
    "3": "s_4.js",
    "4": "s_5.js",
    "5": "s_6.js",
    "6": "s_7.js",
    "7": "s_8.js",
    "8": "s_9.js",
    "9": "s_10.js",
    "10": "s_11.js",
    "11": "s_12.js",
    "12": "s_13.js",
    "13": "s_14.js",
    "14": "s_15.js",
    "15": "s_16.js",
}