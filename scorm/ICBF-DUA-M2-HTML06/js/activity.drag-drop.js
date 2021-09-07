//-------------------------------
//----Actividad DRAG AND DROP----
//----------Version 1.0----------
//-------------------------------
// Actividad base drag & drop//
// Caso por defecto 0. Funcionamiento basico.
// Caso 1. Para drags repetidos que funcionan en diferentes drop -> (d1 || d2) && (d2 || d1)
// Caso 2: Clonar drags // clona un drag y lo pone en un drop - elimina el clon al sacarlo al exterior. Evalua el numero de clones en cada drop.
//------------TODO---------------
// Botonera jq -> div
// ? casos especiales de contenido
// ? migrar a un json o dejar solo en js: por el momento se mantiene en js//
// ? otros casos especiales que puedan surgir.//
// Revision
// Revisar interacion con videos.
//-------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content, slideId) {
  //establecer cual contenido carga la actividad se puede cambiar los datos creando mas objetos de drag
  activityContent = $.extend(true, {}, content);
  activityContent.activityFrame = slideId + " " + activityContent.activityFrame;
  appendContent();    //estructura
  setBootstrap();     //style con bootstrap
  setValues();        //establecer variables
  setDragsAsDraggeable();
  setDropsAsDroppable();
  setContainerAsDroppable();
  setDragsAndDropsAnimations();
}
//-append-Content
function appendContent() {
  $(activityContent.activityFrame).append("<div id='container-root'></div>");        //container de la actividad
  $("#container-root").append("<div id='container'></div>");           //cont general necesario para bootstrap
  $("#container").append("<div class ='drop-container'></div>");   //Crear container para los drop
  $("#container").append(activityContent.contentExtra);   //Crear contenido extra
  $("#container").append("<div class='drag-container'></div>");    //Crear container para los drag
  /*
    $("#container").append("<div id ='actions'></div>");            //Crear container para las acciones
    $("#actions").append("<button onclick=check() class='btn-primary btn_actions bt-check'></button>");
    $("#actions").append("<button onclick=reset() class='btn-primary btn_actions bt-reset'></button>");
    $("#actions").append("<button onclick=correct() class='btn-primary btn_actions bt-correct'></button>");
    $("#actions").append("<button onclick=help() class='btn-primary btn_actions bt-help'></button>");
    */
}

result = 0;

//-bootstrap-clases
function setBootstrap() {
  $("#container").addClass("row");

  $(".drop-container").addClass("col-sm-12");
  $(".drag-container").addClass("row");
}

//inicializar valores
function setValues() {
  //crear las variables de acuerdo al caso o por defecto
  switch (activityContent.activeCase) {
    case 0:
      drags = activityContent.dragsCase0;
      break;
    case 1:
      drags = activityContent.dragsCase0;
      break;
    case 2:
      drags = activityContent.dragsCase2;
      break;
  }
  //crear las variables de acuerdo al caso o por defecto
  switch (activityContent.activeCase) {
    case 0:
      drops = activityContent.dropsCase0;
      break;
    case 1:
      drops = activityContent.dropsCase1;
      break;
    case 2:
      drops = activityContent.dropsCase2;
      break;
  }

  //Número de Drags
  totalDrags = (drags.length - 1);

  //Número de Drops
  totalDrops = (drops.length - 1);




  //Crear los drops

  var cdrop = "<div  id='drop-container2'></div></div>";

  $(".drop-container").append(cdrop);

  for (i = 1; i <= totalDrops; i++) {

    var drop =
         `
            <div class='frame-drop mb-3'>
                <div class='frame-inner-drop row no-gutters'>
                    <div class='drop-content col-12 col-lg-6 rounded-left'>` + drops[i].content + `</div>
                    <div id='drop_` + i + `' class ='droppable col-12 col-lg-6 rounded-right'>
                    </div>
                </div>
            </div>
        `;


      $("#drop-container2").append(drop);


    //llenar contenido drops
    var dropId = "#drop_" + i;
    /*var dropCont = ``;
    $(dropId).append(dropCont);*/

    $("#title-drop_"+i).html("<h1>"+activityContent.dropTitle[i]+"</h1>");
  }



  /*$("#title-drop_2").html("<h1>Cuadrados</h1>");
  $("#title-drop_3").html("<h1>Círculos</h1>");
  $("#title-drop_4").html("<h1>Pentágonos</h1>");*/
  //drop por defecto de cada Drag
  dragsActiveValues = [0];
  //drag por defecto para clones
  dragsDefault = drags.length;
  //dragsDefault=$.extend(true,{},dl);


  //Crear los drags
  for (i = 1; i <= totalDrags; i++) {

    var drag = "<div id='drag_" + i + "' class='col-md-6'></>";
    var dragActive = drags[i].activeDrop;


    if (dragActive == 0) {
      $(".drag-container").append(drag);
    }
    else {
      var dropId = "#drop_" + dragActive;
      $(dropId).append(drag);
    }

    dragsActiveValues.push(dragActive);

    //llenar contenido drags
    var dragId = "#drag_" + i;
    var dragCont = "<div class='dg_content'>" + drags[i].content + "</div>";
    $(dragId).append(dragCont);

  }
  if (activityContent.randomDrag) { randomDrags(); }

  //estado inicial botones
  $(".bt-reset").prop('disabled', true);
  $(".bt-correct").prop('disabled', true);
}

//Aleatorizar el orden los drag -> randomDrag = true;
function randomDrags() {
  var randomDrag = Array.apply(null, { length: totalDrags }).map(function (value, index) { return index + 1; });
  randomDrag.sort(function (a, b) { return 0.5 - Math.random() });
  for (i = 0; i < randomDrag.length; i++) {
    var dragID = "#drag_" + randomDrag[i];
    var dragActive = drags[randomDrag[i]].activeDrop;
    if (dragActive == 0) {
      $(".drag-container").append($(dragID));
    }
    else {
      var dropId = "#drop_" + dragActive;
      $(dropId).append($(dragID));
    }
  }
}
//--Drags
function setDragsAsDraggeable() {
  //Establecer los drag como draggeable
  for (i = 1; i <= totalDrags; i++) {

    var dragId = "#drag_" + i;

    $(dragId).draggable({

      containment: "#container",
      revert: "invalid",
      zIndex: 10,
      snapMode: "inner",
      scroll: true,
      helper:

        function sethelper() {
          //var drag_html = ($(this).html().split('src="')[1].split('">')[0]) ;
          //var drag_html2= "url('"+drag_html+"')";
          return $("<div></div>", {
            css: {
              border: "1px dotted #444",
              height: (($(this).find("img").length > 0) ? $(this).height() * activityContent.zoom : $(this).height()),
              width: (($(this).find("img").length > 0) ? $(this).width() * activityContent.zoom : $(this).width()),
              //"background": drag_html2,
              //"background-size":"cover"
            }
          });
        },

      start: function () {
        $(this).css({ "cursor": "grabbing" });
        $(this).css({ opacity: "0.3" });
      },
      drag: function () {
        $(this).css({ "cursor": "grabbing" });

      },
      stop: function () {
        $(this).css({ "cursor": "grab" });
        $(this).css({ opacity: "1.0" });
      }
    });
  }
}

//--Drops

function setDropsAsDroppable() {

  if(activityContent.allowOnlyRight){

    for (i = 1; i <= totalDrops; i++) {
      var dropId = "#drop_" + i;
      var dropAccept = "#drag_"+activityContent.dropsCase0[i].accept[0]
      //console.log(i+" accepted "+dropAccept);

      // establecer drops como droppables
      $(dropId).droppable({

        greedy: "false", //da prioridad al drop sobre el #container
        tolerance: "touch", // toleracia de aceptacion de un drag > touch, pointer, fit, intersect

        //Aceptar solo el drag correcto:
        //accept: dropAccept,

        //On drop actions
        drop: function (event, ui) {

          //mover el drag a este drop y marcar su "activeDrop" con el id de este drop
          if (activityContent.activeCase == 2) {
            refreshClone(ui.draggable, this);
          }
          else {
            refresh(ui.draggable, this);
          }

          //restablecer estado normal drop
          $(this).removeClass("over");
          //fix de tamaño de drags img o video <->  para animar cambiar css * animate
          //$(ui.draggable).find("img").css({ zoom: activityContent.zoom });
          //$(ui.draggable).find("video").css({ zoom: activityContent.zoom });
        },
        //On over actions
        over: function (event, ui) {
          $(this).addClass("over");
        },
        //On out actions
        out: function (event, ui) {
          $(this).removeClass("over");
        }
      });
    }
  }
  else{

    for (i = 1; i <= totalDrops; i++) {
      var dropId = "#drop_" + i;
      // establecer drops como droppables
      $(dropId).droppable({

        greedy: "false", //da prioridad al drop sobre el #container
        tolerance: "touch", // toleracia de aceptacion de un drag > touch, pointer, fit, intersect
        //On drop actions
        drop: function (event, ui) {

          //mover el drag a este drop y marcar su "activeDrop" con el id de este drop
          if (activityContent.activeCase == 2) {
            refreshClone(ui.draggable, this);
          }
          else {
            refresh(ui.draggable, this);
          }

          //restablecer estado normal drop
          $(this).removeClass("over");
          //fix de tamaño de drags img o video <->  para animar cambiar css * animate
          //$(ui.draggable).find("img").css({ zoom: activityContent.zoom });
          //$(ui.draggable).find("video").css({ zoom: activityContent.zoom });
        },
        //On over actions
        over: function (event, ui) {
          $(this).addClass("over");
        },
        //On out actions
        out: function (event, ui) {
          $(this).removeClass("over");
        }
      });
    }



  }

}

//Establecer container como droppable para posiciones de drag iniciales
function setContainerAsDroppable() {
  $("#container").droppable({
    tolerance: "fit",
    //Retornar a Po al saltar fuera del drop.
    drop: function (event, ui) {
      //mover el drag a este drop y marcar su "activeDrop" con el id de este drop
      if (activityContent.activeCase == 2) {
        refreshClone(ui.draggable, this);
      }
      else {
        refresh(ui.draggable, this);
      }
      //restablecer imagen a su tamaño inicial
      //$(ui.draggable).find("img").css({ zoom: "1.0" });
      //$(ui.draggable).find("video").css({ zoom: "1.0" });
    },
  });
}

//Actualizar posición y activeDrop del drag actual
function refresh(drag, drop) {
  var dragIdName = $(drag).attr("id");
  var dragId = "#" + dragIdName;
  var dragIdValue = dragIdName.split("drag_")[1];

  var dropIdName = $(drop).attr("id");
  var dropId = "#" + dropIdName;
  var dropIdValue = dropIdName.split("drop_")[1];

  //Establecer el #drop actual del drag, 0 para ninguno
  if (dropIdName == "container") {
    var newDropId = 0;
  }
  else {
    var newDropId = dropIdName.split("drop_")[1];
    //Si solo se recibe un drag explusa el drop anterior
    if (activityContent.onlyOneDrag) {
      for (l = 1; l <= totalDrags; l++) {
        if (drags[l].activeDrop == newDropId) {
          var oldDrag = "#drag_" + l;
          $(".drag-container").append($(oldDrag));
          drags[l].activeDrop = 0;
        }
      }
    }
    if(activityContent.allowOnlyRight){



    /*
      if (dragIdValue == 4) {
        dropId = "#container"
        console.log("drop: " + dropIdValue + " drag: " + dragIdValue);

        result = 0;
      }
      else {
        if(activityContent.disableDrag){
          $(dragId).draggable("disable");
        }
        result++;
        if (result == 3) {
          $("#rta-correct").modal({ backdrop: 'static' }, "show");
          $("#successAudio")[0].play();
        }
    }*/

    }
  }
  drags[dragIdValue].activeDrop = newDropId;
  //mover el drag al drop correspondiente o al dragcontainer
  if (dropId == "#container") {
    dropId = ".drag-container";
    if (dragIdValue != 3) {
      result--;
    }
  }
  $(dropId).append($(dragId));
  //check();
};

//clonar drag y ponerlo en el drop
function refreshClone(drag, drop) {
  var dragIdName = $(drag).attr("id");

  var dragId = "#" + dragIdName;
  var dragIdValue = dragIdName.split("drag_")[1];

  var dropIdName = $(drop).attr("id");
  var dropId = "#" + dropIdName;
  var dropIdValue = dropIdName.split("drop_")[1];

  if (drags.length >= dragIdValue) {

    if (drags[dragIdValue].allowClone) {
      var dragClone = $(dragId).clone().prop('id', 'drag_' + drags.length);

      dragClone.draggable({
        containment: "#container",
        revert: "invalid",
        zIndex: 10,
        snapMode: "inner",
        scroll: true,
        helper:

          function sethelper() {
            return $("<div></div>", {
              css: {
                border: "1px dotted #444",
                height: (($(this).find("img").length > 0) ? $(this).height() * activityContent.zoom : $(this).height()),
                width: (($(this).find("img").length > 0) ? $(this).width() * activityContent.zoom : $(this).width()),
              }
            });
          },

        start: function () {
          $(this).css({ "cursor": "grabbing" });
          $(this).css({ opacity: "0.3" });
        },
        drag: function () {
          $(this).css({ "cursor": "grabbing" });

        },
        stop: function () {
          $(this).css({ "cursor": "grab" });
          $(this).css({ opacity: "1.0" });
        }
      });

      drags.push(
        { content: drags[dragIdValue].content, activeDrop: dropIdValue, allowClone: false }
      );

      if (dropId != "#container" && dropId != ".drop-container" && dropId != ".drag-container") {

        $(dropId).append($(dragClone));
        $(dragClone).css({ "cursor": "grab" });
        $(dragClone).css({ opacity: "1.0" });
      }
    }
    else {
      if (dropIdName.startsWith('drop_')) {

        $(dropId).append($(drag));
        $(drag).css({ "cursor": "grab" });
        $(drag).css({ opacity: "1.0" });
      }
      else {
        var defaultDrag = { content: "", activeDrop: 0, allowClone: false };
        drags[dragIdValue] = defaultDrag;
        drag.remove();
      }
    }
  }
  totalDrags = drags.length;
}

//Mostrar la actividad corregida // ? deberia ser mas bien una pista
function correct() {
  reset();
  $(".bt-check").prop('disabled', true);
  $(".bt-reset").prop('disabled', false);
  $(".bt-correct").prop('disabled', false);

  switch (activityContent.activeCase) {
    case 0:
      for (i = 1; i < drops.length; i++) {

        for (j = 0; j < drops[i].accept.length; j++) {
          var dropId = "#drop_" + i;
          var dragId = "#drag_" + drops[i].accept[j];
          $(dropId).append($(dragId));
          $(dragId).draggable("disable");
          $(dragId).css({ cursor: "no-drop" });
          //restablecer imagen a su tamaño inicial
          //$(dragId).find("img").css({ zoom: activityContent.zoom });
        }
      }
      break;
    case 1:
      for (i = 1; i < drops.length; i++) {

        //filtra los que aceptan combinaciones
        if (Object.keys(drops[i]).length > 2) {

          for (j = 0; j < drops[i].accept1.length; j++) {
            var dropId = "#drop_" + i;
            var dragId = "#drag_" + drops[i].accept1[j];
            $(dropId).append($(dragId));
            $(dragId).draggable("disable");
            $(dragId).css({ cursor: "no-drop" });
            //restablecer imagen a su tamaño inicial
            //$(dragId).find("img").css({ zoom: activityContent.zoom });
          }
        }
        else {
          for (j = 0; j < drops[i].accept.length; j++) {
            var dropId = "#drop_" + i;
            var dragId = "#drag_" + drops[i].accept[j];
            $(dropId).append($(dragId));
            $(dragId).draggable("disable");
            $(dragId).css({ cursor: "no-drop" });
            //restablecer imagen a su tamaño inicial
           // $(dragId).find("img").css({ zoom: activityContent.zoom });
          }
        }
      }
      break;
    case 2:
      for (i = 1; i < drops.length; i++) {
        for (j = 0; j < drops[i].accept.length; j++) {
          var dropId = "#drop_" + i;
          var dragId = "#drag_" + drops[i].accept[j];
          refreshClone($(dragId), $(dropId));
          $(dragId).draggable("disable");
          $(dragId).css({ cursor: "no-drop" });
          //restablecer imagen a su tamaño inicial
          //$(dragId).find("img").css({ zoom: activityContent.zoom });
        }
      }
      break;
  }

  var dragId;
  for (i = 1; i < drags.length; i++) {
    dragId = "#drag_" + i;
    $(dragId).draggable("disable");
    $(dragId).css({ cursor: "no-drop" });
    //restablecer imagen a su tamaño inicial
    //$(dragId).find("img").css({ zoom: activityContent.zoom });
  }
}

//reiniciar los componentes de la actividad
function reset() {

  var dragId;

  switch (activityContent.activeCase) {
    case 0:
      for (i = 1; i < drags.length; i++) {

        dragId = "#drag_" + i;

        $(".drag-container").append($(dragId));
        $(dragId).draggable("enable");
        $(dragId).css({ cursor: "grab" });
        //restablecer imagen a su tamaño inicial
        //$(dragId).find("img").css({ zoom: "1.0" });

        drags[i].activeDrop = dragsActiveValues[i];

        var dragActive = drags[i].activeDrop;
        if (dragActive == 0) {
          $(".drag-container").append($(dragId));
        }
        else {
          var dropId = "#drop_" + dragActive;
          $(dropId).append($(dragId));
        }
      }
      break;
    case 1:
      for (i = 1; i < drags.length; i++) {

        dragId = "#drag_" + i;

        $(".drag-container").append($(dragId));
        $(dragId).draggable("enable");
        $(dragId).css({ cursor: "grab" });
        //restablecer imagen a su tamaño inicial
       // $(dragId).find("img").css({ zoom: "1.0" });

        drags[i].activeDrop = dragsActiveValues[i];

        var dragActive = drags[i].activeDrop;
        if (dragActive == 0) {
          $(".drag-container").append($(dragId));
        }
        else {
          var dropId = "#drop_" + dragActive;
          $(dropId).append($(dragId));
        }
      }
      break;
    case 2:
      console.log("reset");
      for (i = dragsDefault; i < drags.length; i++) {
        dragId = "#drag_" + i;
        $(dragId).remove();

      }
      drags.length = dragsDefault;
      totalDrags = (drags.length - 1);

      for (i = 1; i < dragsDefault; i++) {
        dragId = "#drag_" + i;
        $(dragId).draggable("enable");
        $(dragId).css({ cursor: "grab" });
        //restablecer imagen a su tamaño inicial
        //$(dragId).find("img").css({ zoom: "1.0" });
      }
      break;
  }

  if (activityContent.randomDrag) { randomDrags(); }
  $(".bt-check").prop('disabled', false);
  $(".bt-reset").prop('disabled', true);
  $(".bt-correct").prop('disabled', true);
};

//Evaluacion
function check() {

  finalScore = 0;

  switch (activityContent.activeCase) {
    case 0: checkCase0(); break;
    case 1: checkCase1(); break;
    case 2: checkCase2(); break;
  }

  console.log("Score: " + finalScore + "/" + totalDrops);

  if (finalScore == totalDrops) {
    right();
  }
  else {
    wrong(finalScore);
  }
  $(".bt-check").prop('disabled', true);
  $(".bt-reset").prop('disabled', false);
  $(".bt-correct").prop('disabled', false);
};

//Para cada drop busca su drag correcto y pregunta la posicion actual de ese drag para saber si esta correcto.
function checkCase0() {

  var dropScore = 0;
  for (i = 1; i < drops.length; i++) {

    dropScore = 0;
    if (drops[i].accept.length != 0) {
      for (j = 0; j < drops[i].accept.length; j++) {

        //console.log("i "+i +" - j "+j);

        if (i == drags[drops[i].accept[j]].activeDrop) {
          dropScore++;
        }
      }
      if (dropScore == drops[i].accept.length) {
        finalScore++;
      }
    }
  }
  //console.log(dropScore)
  var dragId;
  for (i = 1; i < drags.length; i++) {
    dragId = "#drag_" + i;
    //$(dragId).draggable("disable");
    //$(dragId).css({ cursor: "no-drop" });
    //restablecer imagen a su tamaño inicial
    //$(dragId).find("img").css({ zoom: activityContent.zoom });
  }
  /*
  for (i = 1; i < drops.length; i++) {
    checkByDrop(i);
  }*/
};

function checkByDrop(i) {
    var dropScore = 0;
    if (drops[i].accept.length != 0) {
      for (j = 0; j < drops[i].accept.length; j++) {
        if (i == drags[drops[i].accept[j]].activeDrop) {
          dropScore++;
          //console.log("i "+i +" - "+j);
        }
        else{
          if(activityContent.keepScore){
            resetDragbyId(drops[i].accept[j]);
            $("#drop_" + i).removeClass('dropCorrect');
            $("#drop_" + i).removeClass('dropWrong');
          }
        }
      }
      var numberOfDragsInDrop = $("#drop_" + i + " [id^=drag]").length;
      if ((dropScore == drops[i].accept.length) && (numberOfDragsInDrop == dropScore)) {
          finalScore++;
          $("#drop_" + i).addClass('dropCorrect');
      }
      else{
          $("#drop_" + i).addClass('dropWrong');
      }
    }
}

//Por cada drop con mas de 1 correcto revisar las combinaciones de correctos y evaluar
function checkCase1() {
  console.log("caso 1");
  var dropScore = 0;
  for (i = 1; i < drops.length; i++) {
    //filtra los que aceptan combinaciones
    if (Object.keys(drops[i]).length > 2) {
      var totalAccepted = (Object.keys(drops[i]).length) - 1;
      //por cada combinacion evalua si es correcto si una lo es da positivo.
      for (k = 1; k <= totalAccepted; k++) {
        dropScore = 0;
        var dropFinalScore = drops[i]["accept" + k].length;

        if (dropFinalScore != 0) {

          for (j = 0; j < dropFinalScore; j++) {

            if (i == drags[drops[i]["accept" + k][j]].activeDrop) {
              dropScore++;
            }
          }
          if (dropScore == dropFinalScore) {
            finalScore++;
          }
        }
      }
    }
    else {
      //Si no es combinacion evalua normalmente
      dropScore = 0;
      if (drops[i].accept.length != 0) {

        for (j = 0; j < drops[i].accept.length; j++) {

          if (i == drags[drops[i].accept[j]].activeDrop) {
            dropScore++;
          }
        }
        if (dropScore == drops[i].accept.length) {
          finalScore++;
        }
      }
    }
  }
  var dragId;
  for (i = 1; i < drags.length; i++) {
    dragId = "#drag_" + i;
    $(dragId).draggable("disable");
    $(dragId).css({ cursor: "no-drop" });
    //restablecer imagen a su tamaño inicial
    //$(dragId).find("img").css({ zoom: activityContent.zoom });
  }
};

//Para cada drop busca sus drag correctos recorre todos los drags para buscar los clones activos correctos.
function checkCase2() {
  var dropScore = 0;
  var totalClone = 0;
  //busca los clones creados
  for (i = 1; i < drags.length; i++) {
    if (drags[i].allowClone) {
      totalClone++;
    }
  }
  if (totalClone < drags.length) {
    for (i = 1; i < drops.length; i++) {
      dropScore = 0;
      if (drops[i].accept.length != 0) {
        //busca los clones activos en el drop
        var activeAcceptClones = [];
        for (k = totalClone + 1; k < drags.length; k++) {

          if (drags[k].activeDrop == i) {
            activeAcceptClones.push(k);
          }
        }
        //busca en los activos los correctos, elimina los ya revisados
        if (activeAcceptClones.length == drops[i].accept.length) {
          dropScore = 0;
          for (j = 0; j < drops[i].accept.length; j++) {
            for (k = 0; k < activeAcceptClones.length; k++) {
              if (drags[drops[i].accept[j]].content == drags[activeAcceptClones[k]].content) {

                dropScore++;
                activeAcceptClones.splice(k, 1);
              }
            }
          }
        }
        //resultado
        if (dropScore == drops[i].accept.length) {
          finalScore++;
        }
      }
    }
  }
  var dragId;
  for (i = 1; i < drags.length; i++) {
    dragId = "#drag_" + i;
    $(dragId).draggable("disable");
    $(dragId).css({ cursor: "no-drop" });
    //restablecer imagen a su tamaño inicial
    //$(dragId).find("img").css({ zoom: activityContent.zoom });
  }
};

//Acciones cuando la actividad esta correcta
function right() {
  /*var popContent = "<div id='popRight'>" + activityContent.popupRight + "</div>";
  popup(popContent);*/
    $("#rta-correct").modal({ backdrop: 'static' }, "show");
    $("#successAudio")[0].play();
};
//Acciones cuando la actividad esta Incorrecta
function wrong(finalScore) {
  /*var popContent = "<div id='popWrong'>" + activityContent.popupWrong + "</div>";
  popup(popContent);*/
    $("#rta-incorrect").modal({ backdrop: 'static' }, "show");
    $("#errorAudio")[0].play();
};
//dialogo de ayuda
function help() {
  var popContent = "<div id='popHelp'>" + activityContent.popupHelp + "</div>";
  popup(popContent);
};

//dialogo popup
function popup(popupContent) {
  $("#container").append("<div id='popup'></div>");
  $("#popup").append("<div id='popupContent'></div>");
  $("#popupContent").append(popupContent);
  $("#popupContent").hide();
  $("#popupContent").show("fade", 500, jqcallback);
  $("#popup").click(function () {
    $(this).remove();
  });
}

//Cuadro de dialogo basico de jquery
//var dialogo = "<div id='ayuda' class ='dialogo' title='Ayuda Drag & Drop '><p>Ayuda!</p></div>";
//jqdialog("#ayuda", dialogo);
function jqdialog(labelId, dialogContent, ) {
  $("#actions").append(dialogContent);
  //dialog
  $(labelId).dialog({

    modal: true,
    draggable: false,

    autoOpen: false,
    resizable: false,
    //animacion dialogo
    show: {
      effect: "blind",
      duration: 500
    },
    hide: {
      effect: "fold",
      duration: 500
    },
    /*
    buttons:[{
        text: "Aceptar",
        icon: "ui-icon-heart",
        click: function() {
            $( this ).dialog( "close" );
        },
        showText: false
    }],*/
    closeText: "X",
  });
  $(labelId).dialog("open");
};

//-------------------------------
//--------- Animaciones ---------
//-------------------------------
//--Animaciones basicas--
//--Animaciones jquery: dependientes de la posicion.
//--Opciones: blind, bounce, clip, drop, explode, fade, fold, highlight, puff, pulsate, scale, shake, size, slide
function setDragsAndDropsAnimations() {
  //$("#container").hide();
  //$("#container").show( "slide", 500, jqcallback  );

  //$(".drag-container").hide();
  //$(".drag-container" ).show( "blind", 1000, jqcallback  );

  //$(".drop-container").hide();
  //$(".drop-container" ).show( "blind", 1000, jqcallback  );

  for (i = 1; i <= totalDrops; i++) {
    var dropid = "#drop_" + i;

    $(dropid).hide();
    $(dropid).show("fade", 200 * i, jqcallback);

  }

  for (i = 1; i <= totalDrags; i++) {
    var dragid = "#drag_" + i;

    $(dragid).hide();
    $(dragid).show("fade", 200 * i, jqcallback);
  }
}

function jqcallback() {
  setTimeout(function () {
    $("#effect:visible").removeAttr("style").fadeOut();
  }, 1000);
};