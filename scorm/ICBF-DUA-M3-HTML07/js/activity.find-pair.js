//-------------------------------
//--Actividad ENCONTRAR PAREJAS--
//----------Version 1.0----------
//-------------------------------
// Encontrar parejas mediante seleccionar carta y eliminarlas
// Permite retroalimentación por pareja y/o al finalizar. 
// Permite retroalimentación incorrecta por número de intentos fallidos.
//------------TODO---------------
// ...
//-------------------------------
//funcion de carga de la actividad - onLoad
function loadActivityFunction(content, slideId) {
  activityContent = $.extend(true, {}, content);
  activityContent.activityFrame = slideId + " " + activityContent.activityFrame;
  //funcion de activacion de la actividad

  setCards();
}
//-------------------------------
//Variables
var activeCard = 0;
var totalAnswers = 0;
var totalWrong = 0;
var totalPairs = 0;
var animating = false; //animation flag
//-------------------------------
function setCards(){  
  totalPairs = activityContent.totalCards / 2;
  //Reordenar las cartas si son aleatorias
  if(activityContent.allowRandom){
    var randomCard = Array.apply(null, { length: activityContent.totalCards }).map(function (value, index) { return index + 1; });
    randomCard.sort(function (a, b) { return 0.5 - Math.random() });    
    for (i = 0; i < randomCard.length; i++){
      var j=randomCard[i];      
      $(".card-deck").append($("#card_"+j));
    }
  }
  //Establecer onClick para las cartas 
  for (i = 1; i <= activityContent.totalCards; i++) {
    $("#card_" + i).click(function () {
      if (animating) return false;
      checkCard($(this).attr("id"));
    });
  }
}
//-------------------------------
//comprobar cada carta
function checkCard(id) {
  var idCard = "#" + id;
  var idCardValue = id.split("card_")[1];
  //Si no hay carta activa
  if (activeCard == 0) {
    enableCard(idCard);
    activeCard = idCardValue;
  }
  //Si hay carta activa 
  else {
    animating = true;
    if (activeCard == idCardValue) {
      //Si se da click en la misma carta
      //activar este comportamiento si se quiere que se pueda girar una carta de vuelta sin activar otra.
      disableCard(idCard);      
      activeCard = 0;
      setTimeout(function () { animating = false; }, 300);
    }
    else {
      enableCard(idCard);
      //wait for activation
      setTimeout(function () {
        //evaluar las parejas
        for (i = 0; i < totalPairs; i++) {
          //buscar la carta activa en la matriz de respuesta
          var cardFound = activityContent.cardsPairs[i].find(function (element) {
            return element == idCardValue;
          });
          //si encuentra la carta
          if (cardFound) {
            var pairActive = activityContent.cardsPairs[i].indexOf(cardFound);
            //busca el indice en el arreglo para comparar la carta activa anterior con la pareja de la carta actual
            //indice 0
            if (pairActive == 0) {
              if (activityContent.cardsPairs[i][1] == activeCard) {
                var idCardActive = "#card_" + activeCard;
                $(idCardActive).find(".select-card-inner").hide();
                $(idCard).find(".select-card-inner").hide();
                $("#successAudio")[0].play();
                setTimeout(function () { animating = false; }, 300);
                totalAnswers++;
                checkPair(i);
              }
              else {
                var idCardActive = "#card_" + activeCard;
                disableCard(idCardActive);
                disableCard(idCard);
                checkPairWrong();
                setTimeout(function () { animating = false; }, activityContent.animatingTime);
                $("#errorAudio")[0].play();
                totalWrong++;
              }
            }
            //indice 1
            else {
              if (activityContent.cardsPairs[i][0] == activeCard) {
                var idCardActive = "#card_" + activeCard;
                $(idCardActive).find(".select-card-inner").hide();
                $(idCard).find(".select-card-inner").hide();
                $("#successAudio")[0].play();
                setTimeout(function () { animating = false; }, 300);
                totalAnswers++;
                checkPair(i);
              }
              else {
                var idCardActive = "#card_" + activeCard;
                disableCard(idCardActive);
                disableCard(idCard);
                checkPairWrong();
                setTimeout(function () { animating = false; }, activityContent.animatingTime);
                $("#errorAudio")[0].play();
                totalWrong++;
              }
            }
            activeCard = 0;
            checkEnd();
          }
        }
      }, 1000);
    }
  }
}
//-------------------------------
//Establecer Carta activa
function enableCard(id) {
  $(id).find(".select-card-inner").addClass("selected");
}
//-------------------------------
//Desactivar carta
function disableCard(id) {
  $(id).find(".select-card-inner").removeClass("selected");
}
//-------------------------------
function checkEnd() {
  //RetroAlimentación final
  if (activityContent.allowCheckEnd == 1) {
    if (totalAnswers == totalPairs) {
      $(".card-deck").hide();
      
      $('#findPairCardRetroModal').find(".modal-title").html(activityContent.feedbackCorrect[0]);
      $('#findPairCardRetroModal').find(".modal-text").html(activityContent.feedbackCorrect[1]);
      $("#findPairCardRetroModal").modal();
    }
  }
  //RetroAlimentación Fallido    
  if (activityContent.totalAttempts > 0) {
    if (totalWrong == activityContent.totalAttempts) {
      $(".card-deck").hide();      
      $('#findPairCardRetroModal').find(".modal-title").html(activityContent.feedbackWrong[0]);
      $('#findPairCardRetroModal').find(".modal-text").html(activityContent.feedbackWrong[1]);
      $("#findPairCardRetroModal").modal();
    }
  }
  if(totalAnswers == totalPairs){
    $(".btn-next").show();
  }
}
//-------------------------------
function checkPair(id) {
  if (activityContent.allowCheckPair == 1) {
    $('#findPairCardRetroModal').find(".modal-title").html(activityContent.feedbackPair[0][0]);
    $('#findPairCardRetroModal').find(".modal-text").html(activityContent.feedbackPair[0][1]);
    $('#findPairCardRetroModal').modal();
  }
}
//-------------------------------
function checkPairWrong() {
  console.log("incorrecto");
  if (activityContent.allowCheckPairWrong == 1) {
    $('#findPairCardRetroModal').find(".modal-title").html(activityContent.feedbackPairWrong[0][0]);
    $('#findPairCardRetroModal').find(".modal-text").html(activityContent.feedbackPairWrong[0][1]);
    $('#findPairCardRetroModal').modal();
  }
}
  //-------------------------------