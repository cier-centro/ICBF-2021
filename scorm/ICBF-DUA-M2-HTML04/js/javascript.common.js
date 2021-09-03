//-------------------------------
//------ Javascript Common ------
//----------Version 1.0----------
//-------------------------------
// Biblioteca de funciones comunes de javascript
//-------------------------------

//--------------------
//Funcion base para hacer animacion de intro
function jqcallback() {
  setTimeout(function () {
      $("#effect:visible").removeAttr("style").fadeOut();
  }, 1000);
};

//--------------------
//Funcion base para reproducior audio
//#ID-audio: id del audio que se va reproducir
//#ID-audio-btn: id del contenedor que tiene las imágenes del reproductor
//playAndPauseAudio("#ID-audio","#ID-audio-btn")
function playAndPauseAudio(audioId,audioContainer){  
  isAudioPlayed = !isAudioPlayed;
  if (isAudioPlayed) {
    $(audioId)[0].play();
    $(audioContainer).find("img").attr("src","images/img_pause.png");
  }
  else {
    $(audioId)[0].pause();
    $(audioContainer).find("img").attr("src","images/img_play.png");
  }  
}

//--------------------
//Comprobacion de si esta en mobile
function isMobileDevice() {  
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

//--------------------
//Crear un comboBox usando checkBox -> onReady()
//label: prefijo del id usado para los chechbox 
// -> ej: id="check_1" -> label: "check_"
//totalChecks: numero total de Checks que contine el combo
function checkboxGroup(label, totalChecks){
  $('input[type=checkbox]').on('click', function(){    
    for(i=1;i<=totalChecks; i++){
      var idCheck="#"+label+i;      
      $(idCheck).prop('checked',false);    
    }
    $(this).prop('checked', true);
  });    
}

//--------------------
//Aleatorizar el orden de divs
//requiere un div parent y prefijo de id para sus miembros
//parentDiv: id del parent que contiene los divs ej: "#divParent", ".divParent"
//prefijo del id usado para los div
// -> ej: id="div_1" -> label: "#div_"
//total divs a randomizar
function randomDiv(parentDiv, idDivPrefix, totalDivs) {     
  var randomDiv = Array.apply(null, { length: totalDivs }).map(function (value, index) { return index + 1; });    
  randomDiv.sort(function (a, b) { return 0.5 - Math.random() });  
  for (i = 0; i < randomDiv.length; i++) {
    var divID = idDivPrefix + randomDiv[i];
    console.log(divID);
    $(parentDiv).append($(divID));          
  }
}