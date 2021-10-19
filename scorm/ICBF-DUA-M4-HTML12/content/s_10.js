var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent = `
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
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Fases para la construcción, implementación y seguimiento del POAI</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="text-container mt-5">
            <div class="text-center">
                <h1 class="title-green">Ejemplo de estrategia transversal</h1>
            </div>
        </div>
        <div class="row content-row">
            <div class="container">
                <div class="row d-flex responsive-container">
                    <div class="col-lg-12 col-md-12 col-sm-12 s4-container">
                        <img class="img-fluid" src="images/img_s10.png" alt="Ilustración elementos">
                    </div>
                </div>
                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="col-lg-6 list-of-items mt-5 ">
                        <div class="row item-button align-items-center">
                            <div class="icon-holder col-3 p-3 align-items-center justify-content-center d-flex">
                                <img class="img-fluid" src="images/img_s3.png">
                            </div>
                            <div class="col-8 item-text">
                                <p><b>Educando familias amorosas y protectoras</b></p>
                            </div>
                        </div>
                        <div class="text-center col-12 center-audio-btn">
                            <button id="btnAudio" class="btn btn-audio-play green" onclick="playAndPauseAudio('audio', 'btnAudio')"></button>
                            <audio id="audio" src="../media/audio_s10.mp3"></audio>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(9)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(11)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
`;
var slideActivityContent = {};

isAudioPlayed = false;

$(document).ready(function () {});