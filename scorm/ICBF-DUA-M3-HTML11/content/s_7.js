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
                    <div class="col-sm-6 col-md-6 col-lg-6">
                        <p class="p-box"> <b>Actividad 5: </b> MI CUERPO, TU CUERPO, NUESTROS CUERPOS</p>
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
                <a href="#" onclick="currentSlide(6)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(8)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade master-modal" id="rta-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body">
        <h1 class="modal-title">Juego / arte</h1>
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
            <p>Reconocer las diferentes características que identifican a una niña y a un niño</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Aceptar y reconocer la diferencia y la diversidad</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Reconocer las diferencias de género</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Reconocer las diferentes características físicas de las personas</p>
        </div>
        <div class="mb-4">
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Fomentar el reconocimiento de las partes del cuerpo y de la cara</p>
        </div>
        <div>
            <img class="ok-img" src="images/img_s3_ok.png">
            <p>Identificar el vestuario adecuado según el género</p>
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
        <p> <b class="content-title mb-4">Materiales:</b> dos cuerpos hechos en cartón paja o algún material resistente, uno de niña y otro de niño; doce caras con diferentes características físicas: seis de niña y seis de niño; seis mudas de ropa, tres de niña y tres de niño; seis pares de zapatos, tres de niña y tres de niño, y tres o cuatro juegos de ojos de diferentes colores. </p>
        <p> <b class="content-title">Procedimiento:</b> para que las niñas y niños tengan clara la diferencia de género, se inicia hablando de las diferencias físicas de una niña y de un niño. <br>A partir de esta charla, se empezará a invitar a las niñas y niños a colocar una cara, bien sea de niña o de niño, a uno de los cuerpos. Posteriormente, se invita a otra niña o niño a que escoja los zapatos, la cara y el vestuario y unos ojos. </p>
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
        <h1 class="modal-title">Caminadores, párvulos, prejardín y jardín</h1>
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
