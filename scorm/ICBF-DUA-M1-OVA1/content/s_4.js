var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">

            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row mb-5">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Política de atención integral a la primera infancia</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>

        <div class="row content-row">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="row align-items-center justify-content-between mb-3">
                      <div class="col-lg-8 list-of-items">
                        <div class="row item-button align-items-center">
                          <div class="icon-holder col-3 p-3 align-items-center justify-content-center d-flex">
                              <img class="img-fluid" src="images/img_s2_opc.png">
                          </div>
                          <div class="col-8 item-text">
                              <p><b>Estrategia de Atención Integral a la Primera Infancia “De Cero a Siempre"</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-12 col-md-12">
                      <div class="col-lg-10 offset-lg-1 my-3  mb-5 p-container p-box">
                        <p>Entendamos a través de este audio los principales elementos que propone la política para su implementación en los territorios.</p>
                      </div>
                      <div class=" my-3  mb-5">
                        <p class="col-lg-6 col-md-6 col-sm-10 text-center offset-lg-3 offset-md-3 offset-sm-1  p-box">Haga clic en el siguiente botón para reproducir el audio</p>
                      </div>
                      <div class="text-center col-12 center-audio-btn">
                        <button id="btnAudio" class="btn btn-audio-play orange mt-5" onclick="playAndPauseAudio('audio', 'btnAudio')"></button>
                          <audio id="audio" src="./media/audio_s4.mp3"></audio>
                      </div>

                      <div class="row mt-5 justify-content-between">
                        <div class="col-lg-7 col-md-7 p-container p-box">
                          <p>Después de escuchar el audio, lo invitamos a realizar la siguiente actividad, para poner en práctica la comprensión de los contenidos aprendidos. </p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-10">
                            <button class="d-flex btn row content-center" onclick="currentSlide(9)">
                                <img class="img-fluid" src="images/img_btn_s3.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center ml-3"><b>Actividad</b></p>
                                </button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(3)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(5)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
`;
var slideActivityContent = {
};

isAudioPlayed = false;

$(document).ready(function() {

});
