var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent = `
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Actividad 2</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Actividades de práctica</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="row d-flex align-items-center justify-content-center text-center  mt-3 mt-lg-5">
            <div class="col-12 col-lg-10">
                <p class="instruction">
                    Arrastre la opción del principio que corresponda a cada uno de los enunciados.
                </p>
            </div>
        </div>
        <div class="row content-row align-items-center justify-content-center mt-0">
            <div class="col-sm-10 activity"></div>
        </div>
        <div class="row content-row align-items-center justify-content-center mt-0">
            <div class="col-6 col-md-3 col-xl-2">
                <botton onclick="check() " class="btn btn-access p-3 m-0 w-100">Evaluar</a>
            </div>
            <div class="col-6 col-md-3 col-xl-2">
                <botton onclick="reset()" class="btn btn-access p-3 m-0 w-100 bt-reset">Reiniciar</a>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(2) " class="btn btn-link btn-back float-left mt-4"></a>
                <a href="#" onclick="currentSlide(4) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-correct">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Muy bien!</h4>
                <p>Proporcionar oportunidades de colaboración, tutoría entre iguales y apoyo es una opción para sostener los esfuerzos y la persistencia; dar conceptos con analogías pertinentes y metáforas es una opción para la comprensión, y decodificar el texto, la notación matemática y los símbolos, como método de apoyo, es una opción para la lengua y los símbolos.</p>
                <div class="row">
                    <div class="col">
                        <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
                <p>Recuerde que cada opción tiene otras múltiples relacionadas con cada principio. </p>
                <div class="row">
                    <div class="col">
                        <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
var slideActivityContent = {
    // Drag & Drop
    // Parámetros
    //Tipo de actividad
    controller: "js/activity.drag-drop.js",
    //Nombre del marco que contiene la actividad por defecto el body del html->Ej: #actividad
    activityFrame: ".activity",
    //zoom de drag para <img>  Para acomodar el tamaño de las imagenes dentro del drop.
    zoom: 1.0,
    //aleateorizar los drag ->true/false
    randomDrag: true,
    //recibe solo un drag en cada drop  devuelve los otros drag al exterior ->true/false
    onlyOneDrag: true,
    //------------------------------//
    // Mensajes de retroalimentacion
    // recibe <html> del mensaje
    //ayuda
    popupHelp: "",
    //correcto
    popupRight: "",
    //incorrecto
    popupWrong: "",
    //------------------------------//
    //Caso por defecto 0. Funcionamiento basico.
    //Caso 1. Para drags repetidos que funcionan en diferentes drop -> (d1 || d2) && (d2 || d1)
    //Caso 2: Clonar drags  clona un drag y lo pone en un drop - elimina el clon al sacarlo al exterior. Evalua el numero de clones en cada drop.
    activeCase: 0,
    //------------------------------//
    //-------------Drags------------//
    //------------------------------//
    //Drags --> crear llenado de los drags
    //se deja drags[0] vacio por necesidad
    //content: contenido del drag recibe <html> Ej: <p>Drag<p>, <img class='img-fluid' src='images/img01.gif'>,
    //activeDrop: drop actual de cada drag. por defecto el dragcontainer: 0
    //------------------------------//
    //Para caso 0 y 1:
    dragsCase0: [
        0,
        {
            content: "<div class='p-container-drag'><p>Opción para sostener los esfuerzos y la persistencia.</p></div>",
            activeDrop: 0
        },
        {
            content: "<div class='p-container-drag'><p>Opción para la comprensión.</p></div>",
            activeDrop: 0
        },
        {
            content: "<div class='p-container-drag'><p>Opción para la lengua y los símbolos.</p></div>",
            activeDrop: 0
        }
    ],
    //------------------------------//
    //-------------Drops------------//
    //------------------------------//
    //Drops --> crear llenado de los drops del caso default: caso=0;
    //se deja drops[0] vacio por necesidad
    //content:contenido del drop recibe <html>
    //correcto: arreglo con los drags correctos de cada drop corresponde al valor del arreglo drags empenzando con el [1]
    dropsCase0: [0,
        {
        content: `
                <p>Proporcionar oportunidades de colaboración, tutoría entre iguales y apoyo.</p>
            `,
            accept: [1]
        },
        {
            content:
            `
                <p>Dar conceptos con analogías pertinentes y metáforas.</p>

            `
            ,
            accept: [2]
        },
        {
            content:
            `
                <p>Decodificar el texto, la notación matemática y los símbolos, como método de apoyo.</p>

            `
            ,
            accept: [3]
        }
    ],
    allowOnlyRight: true,
    disableDrag: false,
    contentExtra: '',
    dropTitle: []
};

$(document).ready(function() {
  $("#btnNext").hide();
  setCompletedActivityFunction();
});

function setCompletedActivityFunction(){
    $("#rta-correct").on('hidden.bs.modal', function () {
        for (j = 1; j <= 3; j++) {
            $("#drag_" + j).draggable("disable");
          }
          $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
    });
    $("#rta-incorrect").on('hidden.bs.modal', function () {
        result = 0;
        for (j = 1; j <= 4; j++) {
          $("#drag_" + j).draggable("enable");
        }
        //reset();
    });
  }