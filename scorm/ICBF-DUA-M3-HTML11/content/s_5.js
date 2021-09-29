var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Educación Inclusiva > Módulo 2</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Actividades</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="row content-row">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-sm-6 col-md-6 col-lg-4">
                        <p class="p-box"> <b>Actividad 3: </b> Galería de siluetas</p>
                    </div>
                    <div class="col-sm-12">
                        <div class="row answers-buttons">
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-1">
                                <div class="answer-img first"></div>
                                <p class="answer-text">Pilar reforzado</p>
                                </button>
                            </div>
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-2">
                                <div class="answer-img second"></div>
                                <p class="answer-text">Objetivos de la actividad</p>
                                </button>
                            </div>
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-3">
                                <div class="answer-img third"></div>
                                <p class="answer-text">Dimensión fortalecida</p>
                                </button>
                            </div>
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-4">
                                <div class="answer-img fourth"></div>
                                <p class="answer-text">¿Cómo lo hacemos?</p>
                                </button>
                            </div>
                            <div class="col-lg-6">
                                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#rta-5">
                                <div class="answer-img fifth"></div>
                                <p class="answer-text">Niveles</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(4)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(6)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h1 class="modal-title">Juego y arte</h1>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-2">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Reconocer y diferenciar su cuerpo</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Diferenciar su cuerpo del de los demás</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Diferenciar géneros</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Interiorizar las partes del cuerpo</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Describir su cuerpo y el de los demás</p>
        </div>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-3">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h1 class="modal-title">corporal / artística</h1>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-4">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <p> <b class="content-title mb-4">Materiales:</b> pliegos de Papel kraft o papel periódico; revistas; papel crepe o seda de varios colores; pegante; marcadores gruesos; tijeras; cinta; témperas y vinilos. </p>
        <p> <b class="content-title">Procedimiento:</b> haciendo primero una silueta, se le muestra a las niñas y niños como debe realizarse la actividad. Luego, se organizan en grupos pequeños y se elije una o uno de ellos y los demás marcan su silueta. Cuando todas las siluetas estén listas, se recortan y se van pegando en la pared, en la parte superior se escribe en un cartón el nombre de cada niña o niño. Después, se les pide que decoren la silueta empleando los diversos materiales, puede recortar papel periódico, hacer bolitas de papel, etc. <br>Posteriormente, se maneja el esquema corporal, pintándole a cada una de la siluetas los ojos, la boca, la nariz, el cabello… <br>Se habla de las diferencias que existen entre todas las siluetas de la galería </p>
        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-link btn-next float-right mt-4" data-dismiss="modal"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="modal fade master-modal" id="rta-5">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h1 class="modal-title">Párvulos y prejardín</h1>
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
};


$(document).ready(function() {

});
