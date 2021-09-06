var slideTitle = "Educación inclusiva";
var slideContent =`
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
    <div class="row content-row align-items-center">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 p-box">        
        <p>El Diseño Universal para el Aprendizaje (DUA), liderado por el Dr. David Rose, es una herramienta que garantiza un acceso eficaz a los contenidos del currículo escolar e incrementa las oportunidades de aprendizaje. Selecciona el tipo de aprendizaje de la lista desplegable que corresponda a cada principio. </p>         
      </div>
    </div>
    <div class="row  align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_1" class="custom-select" id="select_1">
        <option value="0">---</option>      
        <option value="1">El “cómo” del aprendizaje</option>
        <option value="2">El “qué” del aprendizaje</option>
        <option value="3">El “por qué” del aprendizaje</option>       
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Suministrar múltiples y flexibles métodos de presentación.</p>         
      </div>
    </div>

    <hr class="text-line">

    <div class="row align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_2" class="custom-select" id="select_2">
        <option value="0">---</option>            
        <option value="1">El “cómo” del aprendizaje</option>
        <option value="2">El “qué” del aprendizaje</option>
        <option value="3">El “por qué” del aprendizaje</option>        
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Promover múltiples y flexibles métodos de expresión del aprendizaje.</p>         
      </div>
    </div>

    <hr class="text-line">

    <div class="row align-items-center">
      <div class="col-lg-1 hidden-md"></div>
      <div class="col-lg-3 col-md-4">
      <select name="value_3" class="custom-select" id="select_3">
        <option value="0">---</option>      
        <option value="1">El “cómo” del aprendizaje</option>
        <option value="2">El “qué” del aprendizaje</option>
        <option value="3">El “por qué” del aprendizaje</option>        
      </select>
      </div>
      <div class="col-lg-7 col-md-7 p-container-select">
        <p>Proveer múltiples y flexibles opciones de motivación.</p>         
      </div>
    </div>

    
    
    <div class="row">
      <div class="col">
        <a href="#" onclick="currentSlide(1) " class="btn btn-link btn-back float-left mt-4"></a>
        <a href="#" onclick="currentSlide(3) " class="btn btn-link btn-next float-right mt-4" id="btnNext"></a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modalRight" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">     
      <div class="modal-body">
        <h4>¡Muy bien!</h4>
        <p>Los tres principios primarios que guían el DUA nos ayudan a reflexionar en torno al aprendizaje desde las preguntas: qué, cómo y por qué enseñamos.</p>                
        <div class="btn-exit">
          <a href="#" onclick="exitSlide()" class="btn btn-link btn-next float-right"></a>
        </div>
      </div>      
    </div>
  </div>
</div>

<div class="modal fade" id="modalWrong" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">     
      <div class="modal-body">
        <h4>¡Vuelva a intentarlo!</h4>
        <p>Recuerda que cada principio esta relacionado de una manera directa con los aprendizajes.</p>                
        <div class="btn-exit">
          <a href="#" onclick="resetModal()" class="btn btn-link btn-next float-right"></a>
        </div>
      </div>      
    </div>
  </div>
</div>

<audio id="successAudio">
  <source src="media/success.mp3" type="audio/mpeg">
</audio>
<audio id="errorAudio">
  <source src="media/error.mp3" type="audio/mpeg">
</audio>
`;
var slideActivityContent = {};
var totalSelect = 3;
var totalCorrect = 0;
var currentSelection = 0;
var answer = [0, 2, 1, 3];
var currentAnswer = new Array(totalSelect);
var completed = new Array(totalSelect);

$(document).ready(function () { 
  $("#btnNext").hide();
  currentAnswer.fill(0, 0, totalSelect);
  completed.fill(0, 0, totalSelect);
  
  $(".hide").hide();
  
  $("#select_1").change(function () {
    currentSelection = 1;    
    completed[currentSelection - 1] = 1;
    
    if ($(this).val() > 0) { 
      $(this).prop('disabled', true);
      checkSelect($(this).val());     
    }
    
  });

  $("#select_2").change(function () {
    currentSelection = 2;    
    completed[currentSelection - 1] = 1;
    
    if ($(this).val() > 0) { 
      $(this).prop('disabled', true);
      checkSelect($(this).val());  
    }
   
  });

  $("#select_3").change(function () {
    currentSelection = 3;    
    completed[currentSelection - 1] = 1;
    
    if ($(this).val() > 0) { 
      $(this).prop('disabled', true);
      checkSelect($(this).val());  
    }
    
  });

  

});

function checkSelect(id){ 
  if (answer[currentSelection] == id) {  
    currentAnswer[currentSelection] = 1;
  }
  else {        
    currentAnswer[currentSelection] = 0;
  }
  checkEnd();
}

function checkEnd() { 
  var result = currentAnswer.reduce((a, b) => a + b, 0);
  var complete = completed.reduce((a, b) => a + b, 0);
  if (complete == totalSelect) { 
    if (result == totalSelect) { 
      //showModal Correcto
      $("#successAudio")[0].play();
      $("#modalRight").modal({backdrop:'static'},"show");
    }
    else {
      //showModal Incorrecto            
      $("#errorAudio")[0].play();
      $("#modalWrong").modal({backdrop:'static'},"show");
    }
  }
}

function resetModal() { 

  $("#modalWrong").modal("hide");
  totalCorrect = 0;
  currentSelection = 0;
  currentAnswer.fill(0, 0, totalSelect);
  completed.fill(0, 0, totalSelect);
  for (k = 1; k <= totalSelect; k++){    
    $("#select_" + k).prop('disabled', false); 
    $("#select_" + k + " option[value='0']").prop('selected', true);    
  }
}

function exitSlide() { 
  $("#modalRight").modal("hide");
  $("#btnNext").show();
}




