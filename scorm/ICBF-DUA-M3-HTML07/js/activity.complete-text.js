//-------------------------------
//----Actividad Complete Text----
//----------Version 1.0----------
//-------------------------------
// Actividad de completar parrafo haciendo click en botones
//
// Permite Retroalimentacion:
// - Activa: Al hacer click se valida
// - Pasiva: Con un botón adicional se valida.
// - Activa/Pasiva: Retroalimentación por pregunta y general al terminar.
//
//------------TODO---------------
// Pendientes de optimizar y/o implementar
// ...
// -------------------------------
// Funcion de carga de la actividad - onLoad
function loadActivityFunction(content, slideId) {
  activityContent = $.extend(true, {}, content);
  //funcion de activacion de la actividad
  setActivityElements();
}
// -------------------------------
// Variables
// -------------------------------
//Etiqueta del marco contenedor del párrafo incompleto y de los campos a completar
var incompleteText = "#incompleteText";
//Etiqueta del marco contenedor de los botones de texto
var textButtonOpt = "#textButtonOptions";
//Etiqueta del id de los contenedores de los botones
var idOptionPrefix = "#buttonContainer_";
//Cambia cuando un campo está listo para recibir texto
var isReadyToReceiveAnswer = false;
//Identificador del campo seleccionado
var selectedField = 0;
//Identificador del botón seleccionado
var selectedTextButton = 0;
//Contador de respuestas correctas en validación activa
var totalCorrectInActiveCheck = 0;
//-------------------------------
// Funciones
//-------------------------------
// Iniciar Actividad
function setActivityElements() {
  $("#btn-resetQuestion").hide();
  $("#btnNext").hide();
  $("#btn-endQuestion").show();
  setQuestion();
}
//-------------------------------
//Establecer pregunta actual
function setQuestion() {
  $(textButtonOpt).empty();
  createQuestion();
  setActivityType();
}
//-------------------------------
//Crea la interfaz de la pregunta
function createQuestion() {
  var paragraph = "<p>";
  for (var i = 0; i < activityContent.phrases.length; i++) {
    paragraph += activityContent.phrases[i].firstPhrase;
    paragraph += '<span data-value="' + (
    i + 1) + '" data-answer = "0">&nbsp</span>';
    paragraph += activityContent.phrases[i].lastPhrase;
  }
  paragraph += "</p>";
  $(incompleteText).html(paragraph);
  for (i = 0; i < activityContent.phrases.length; i++) {
    $(textButtonOpt).append('<div class="' + activityContent.buttonContainerClass + '" id="buttonContainer_' + (
    i + 1) + '">' + '<button type="button" id = "textBtn_' + (
    i + 1) + '" data-value = "' + (
    i + 1) + '" class="btn btn-primary btn-block">' + activityContent.phrases[i].hiddenWord + '</button>' + '</div > ');
  }
  if (activityContent.allowRandom) {
    randomDiv(textButtonOpt, idOptionPrefix, activityContent.phrases.length);
  }
  if (activityContent.allowActiveCheck) {
    $("#btn-endQuestion").hide();
  }
}
//-------------------------------
//Asigna las funciones de los elementos (campos-botones) dependiendo del tipo seleccionado
function setActivityType() {
  if (activityContent.type === 1) {
    setFieldFirstModeClickFunction();
    setButtonFirstModeClickFunction();
  } else if (activityContent.type === 2) {
    setFieldOtherModeClickFunction();
    setButtonSecondModeClickFunction();
  } else {
    setFieldOtherModeClickFunction();
    setButtonThirdModeClickFunction();
  }
}
//-------------------------------
// Configura las funciones del evento click para los campos en el tipo 1
function setFieldFirstModeClickFunction() {
  $(incompleteText + " span").click(function() {
    var selectedAnswerField = parseInt($(this).attr("data-answer"));
    if (selectedAnswerField !== 0) {
      doWhenSelectedFieldIsFull(selectedAnswerField, $(this));
      $(this).addClass("selected").removeClass("full").delay(150).queue(function() {
        $(this).removeClass("selected").dequeue().text(".");
      });
    }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 1
function setButtonFirstModeClickFunction() {
  $(textButtonOpt + " button").click(function() {
    var wordsToAnswer = $(incompleteText + " span");
    for (var i = 0; i < activityContent.phrases.length; i++) {
      if (parseInt(wordsToAnswer.eq(i).attr("data-answer")) === 0) {
        selectedField = (i + 1);
        break;
      }
    }
    setAnsweredState($(this));
  });
}
//-------------------------------
// Configura las funciones del evento click para los campos en los otros tipos
function setFieldOtherModeClickFunction() {
  $(incompleteText + " span").click(function() {
    setReadyToReceiveAnswer($(this));
    var selectedAnswerField = parseInt($(this).attr("data-answer"));
    if (selectedAnswerField !== 0) {
      doWhenSelectedFieldIsFull(selectedAnswerField, $(this));
    }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 2
function setButtonSecondModeClickFunction() {
  $(textButtonOpt + " button").click(function() {
    if (isReadyToReceiveAnswer) {
      isReadyToReceiveAnswer = false;
      setAnsweredState($(this));
    }
  });
}
//-------------------------------
// Configura las funciones del evento click para los botones en el tipo 3
function setButtonThirdModeClickFunction() {
  $(textButtonOpt + " button").click(function() {
    if (isReadyToReceiveAnswer) {
      isReadyToReceiveAnswer = false;
    } else {
      var wordsToAnswer = $(incompleteText + " span");
      for (var i = 0; i < activityContent.phrases.length; i++) {
        if (parseInt(wordsToAnswer.eq(i).attr("data-answer")) === 0) {
          selectedField = (i + 1);
          break;
        }
      }
    }
    setAnsweredState($(this));
  });
}
//-------------------------------
// Configura las funciones cuando el campo seleccionado está lleno
function doWhenSelectedFieldIsFull(selectedAnswerField, thisElement) {
  var buttonElement = textButtonOpt + ' button[data-value="' + selectedAnswerField + '"]';
  $(buttonElement).removeClass("disabled");
  thisElement.attr("data-answer", 0);
}
//-------------------------------
// Configura las funciones cuando se responde con una palabra
function setAnsweredState(thisElement) {
  selectedTextButton = thisElement.data("value");
  var selectedFieldElement = incompleteText + ' span[data-value="' + selectedField + '"]';
  $(selectedFieldElement).attr("data-answer", selectedTextButton);
  $(selectedFieldElement).text(thisElement.text());
  changeClass($(selectedFieldElement), "full", "selected");
  thisElement.addClass("disabled");
  checkInActiveMode(selectedFieldElement, selectedTextButton);
}
//-------------------------------
// Configura las funciones el campo está listo para recibir respuesta
function setReadyToReceiveAnswer(thisElement) {
  isReadyToReceiveAnswer = true;
  $(incompleteText + " span").removeClass("selected");
  changeClass(thisElement, "selected", "full")
  selectedField = thisElement.attr("data-value");
}
//-------------------------------
// Configura las funciones cuando la validación activa está seleccionada
function checkInActiveMode(selectedFieldElement, selectedTextButton) {
  if (activityContent.allowActiveCheck) {
    if ((parseInt(selectedField) === selectedTextButton) || ($(selectedFieldElement).text() === activityContent.phrases[selectedField - 1].hiddenWord)) {
      //completeQuestion(selectedTextButton);
      $(selectedFieldElement).addClass("correct disabled");
      totalCorrectInActiveCheck++;
      completeQuestionRight();

      if (totalCorrectInActiveCheck === activityContent.phrases.length) {
        console.log("finalizado");
        exitActivity(totalCorrectInActiveCheck);
      }
    } else {
      console.log("incorrectopasivo");
      completeQuestion();
    }

  }
}
//-------------------------------
// Cambia la clase de un elemento, una antigua por otra nueva
function changeClass(element, addedClass, removedClass) {
  element.removeClass(removedClass);
  element.addClass(addedClass);
}
//-------------------------------
// Verifica las preguntas correctas
function checkAnswers() {
  $("#btn-endQuestion").hide();
  var totalCorrect = 0;
  disableActivity();
  var wordsToAnswer = $(incompleteText + " span");
  for (i = 0; i < activityContent.phrases.length; i++) {
    if ((wordsToAnswer.eq(i).data("value") === wordsToAnswer.eq(i).data("answer")) || (wordsToAnswer.eq(i).text() === activityContent.phrases[i].hiddenWord)) {
      totalCorrect++;
      wordsToAnswer.eq(i).addClass("correct");
    } else {
      wordsToAnswer.eq(i).addClass("incorrect");
    }
  }
  exitActivity(totalCorrect); //Retroalimentacion final -> se debe establecer su funcionalidad en el slide correspondiente
}
//-------------------------------
// Deshabilitar los elementos de la actividad
function disableActivity() {
  $(incompleteText + " span").addClass("disabled");
  $(textButtonOpt + " button").addClass("disabled");
}
//-------------------------------
// Reinicia la actividad
function resetActivity() {
  isReadyToReceiveAnswer = false;
  selectedField = 0;
  selectedTextButton = 0;
  totalCorrectInActiveCheck = 0;
  setActivityElements();
}
//-------------------------------
