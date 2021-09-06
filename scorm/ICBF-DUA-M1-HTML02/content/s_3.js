var slideTitle = "Educación inclusiva";
var slideContent = `

<div class="row info-container">
  <div class="col">

    <div class="row header-row align-items-center">
      <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid"src="./images/logo-header.png"></div>
      <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5"><p>Diseño Universal para el Aprendizaje - DUA &gt; Educación Inclusiva</p></div>
      <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1) " class="btn btn-link btn-home float-right"></a></div>
    </div>
    <div class="row title-row">
      <div class="col d-flex align-items-center row">
        <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Educación inclusiva</p>
        <div class="col-2 col-md-3">
          <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Educación inclusiva">
        </div>
      </div>
    </div>
    <div class="row d-flex align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <p class="instruction my-4">Arrastre las opciones correctas de la parte inferior hacia el recuadro central, de manera que se complete el párrafo.</p>
      </div>
    </div>
    <div class="row content-row align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 p-box">
        <p>La educación inclusiva no es un tema reciente, Colombia ha venido construyendo la educación inclusiva desde hace algunos años, por ejemplo, desde la Resolución 2565 de 2003 “por la cual se establecen parámetros y criterios para la prestación del servicio educativo a la población con necesidades educativas especiales”. <br> Por tanto, las instituciones educativas deben contar con:</p>
      </div>
    </div>

    <div class="row content-row align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 activity"></div>
    </div>

    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(2) " class="btn btn-link btn-back float-left mt-4"></a>
        <a href="#" onclick="currentSlide(4) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade master-modal" id="rta-correct-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Muy bien!</h4>
        <p>Todas las instituciones educativas deberían con estos tres aspectos brindar servicios educativos a la población con discapacidad.</p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-incorrect-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h4 class="modal-title">¡Vuelva a intentarlo!</h4>
        <p>Todas las instituciones educativas deberían con estos tres aspectos: tener acceso a aulas de apoyo especializadas, incluir a la población con NEE en los planes educativos elaborados para la mayoría de los niños y contar con por lo menos un docente o profesional de apoyo,  en el establecimiento educativo donde haya un número igual o superior a diez (10) estudiantes; con el fin de brindar servicios educativos a la población con discapacidad.</p>
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
  onlyOneDrag: false,
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
    0, {
      content: "<div class='p-container-drag'><p>acceso a aulas de apoyo especializadas</p></div>",
      activeDrop: 0
    }, {
      content: "<div class='p-container-drag'><p>inclusión de la población con NEE (con necesidades educativas especiales) en los planes educativos elaborados para la mayoría de los niños</p></div>",
      activeDrop: 0
    }, {
      content: "<div class='p-container-drag'><p>mínimo un docente o profesional de apoyo  en el establecimiento educativo donde haya un número igual o superior a diez estudiantes</p></div>",
      activeDrop: 0
    }, {
      content: "<div class='p-container-drag'><p>implementos de comunicación inclusivos e integradores para las personas con NEE (con necesidades educativas especiales)</p></div>",
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
  dropsCase0: [
    0, {
      content: " ",
      accept: [1, 2, 3]
    }
  ],

  allowOnlyRight: true,

  disableDrag: false,

  contentExtra: '<div class="row w-100 content-row align-items-center"><div class="col-sm-12 p-box"><p>para prestar servicios educativos a la población con discapacidad (población con necesidades educativas especiales [NEE], denominadas así es su momento).</p></div></div>',

  dropTitle: []
};

$(document).ready(function() {
  $("#btnNext").hide();
});

function resetModal() {
  $("#modalWrong").modal("hide");
  result = 0;
  for (j = 1; j <= 4; j++) {
    $("#drag_" + j).draggable("enable");
  }
  reset();
}

function exitSlide() {
  $("#modalRight").modal("hide");
  for (j = 1; j <= 4; j++) {
    $("#drag_" + j).draggable("disable");
  }
  $("#btnNext").fadeIn(500).delay(500).effect( "bounce", "slow" );
}
