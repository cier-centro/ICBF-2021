var slideTitle = "Diseño Universal del Aprendizaje";
var slideContent =`
<div class="row info-container">
    <div class="col">
        <div class="row header-row align-items-center">
            <div class="main-logo-header-left col-md-1 col-2"><img class="img-fluid" src="./images/logo-header.png">
            </div>
            <div class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5">
                <p>Diseño Universal del Aprendizaje - DUA > Aplicaciones de principios DUA</p>
            </div>
            <div class="col-2 col-md-3"><a href="#" onclick="currentSlide(1)" class="btn btn-link btn-home float-right"></a></div>
        </div>
        <div class="row title-row">
            <div class="col d-flex align-items-center row">
                <p class="col-9 offset-3 col-md-8 offset-md-1 pl-md-5 mb-0">Aplicaciones de principios DUA</p>
                <div class="col-2 col-md-3">
                    <img class="img-fluid float-right" src="images/img_s2_1.png" alt="Diseño Universal del Aprendizaje">
                </div>
            </div>
        </div>
        <div class="row content-row justify-content-center">
            <div class="col-11 col-lg-10">

                <div class="row align-items-center justify-content-between mb-3">
                    <div class="col-lg-8 list-of-items">
                        <div class="row item-button align-items-center">
                            <div class="icon-holder col-4 align-items-center justify-content-center d-flex">
                                <img class="img-fluid" src="images/img_s2_opc.png">
                            </div>
                            <div class="col-7 item-text">
                                <p><b>Principio I</b></p>
                                <p>Pauta 1: Proporcionar opciones de percepción</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 text-center">
                        <p class="p-box mb-0">Da clic en cada número para conocer más opciones del principio.</p>
                    </div>
                </div>

                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-8">

                        <div class="accordion">
                            <div class="card">

                                <button class=" btn collapsed card-header d-flex align-items-center" data-toggle="collapse" data-target="#content1" aria-expanded="false" aria-controls="content1">
                                    <div class="title-number">
                                        1
                                    </div>
                                    <div class="title-item">
                                        <p class="mb-0">
                                            Opciones que permitan modificar y personalizar la presentación de la información
                                        </p>
                                    </div>
                                    <div class="down-pointer">
                                        <img class="img-fluid" src="images/img_arrow_dropdown.png">
                                    </div>
                                </button>
                                <div id="content1" class="collapse">
                                    <div class="card-body p-3">
                                        <p><b>Ejemplos:</b></p>
                                        <ul>
                                            <li>El tamaño del texto o de las imágenes.</li>
                                            <li>El volumen de la voz o del sonido.</li>
                                            <li>El contraste entre el fondo y el texto o imagen.</li>
                                            <li>El color usado para informar o enfatizar.</li>
                                            <li>La velocidad o tiempos de un video, animación, sonidos, simulaciones. </li>
                                            <li>La disposición de elementos visuales u otros.</li>
                                        </ul>
                                    </div>
                                </div>

                                <button class=" btn collapsed card-header d-flex align-items-center item-even" data-toggle="collapse" data-target="#content2" aria-expanded="false" aria-controls="content2">
                                    <div class="title-number">
                                        2
                                    </div>
                                    <div class="title-item">
                                        <p class="mb-0">
                                            Proveer alternativas de información auditiva
                                        </p>
                                    </div>
                                    <div class="down-pointer">
                                        <img class="img-fluid" src="images/img_arrow_dropdown.png">
                                    </div>
                                </button>
                                <div id="content2" class="collapse">
                                    <div class="card-body p-3">
                                        <p><b>Ejemplos:</b></p>
                                        <ul>
                                            <li>Textos equivalentes en forma de grabación.</li>
                                            <li>Analogías visuales para enfatizar la prosa (emociones y símbolos).</li>
                                            <li>Equivalentes visuales para efectos de sonido y alertas</li>
                                        </ul>
                                    </div>
                                </div>

                                <button class=" btn collapsed card-header d-flex align-items-center" data-toggle="collapse" data-target="#content3" aria-expanded="false" aria-controls="content3">
                                    <div class="title-number">
                                        3
                                    </div>
                                    <div class="title-item">
                                        <p class="mb-0">
                                            Proveer alternativas de información visual
                                        </p>
                                    </div>
                                    <div class="down-pointer">
                                        <img class="img-fluid" src="images/img_arrow_dropdown.png">
                                    </div>
                                </button>
                                <div id="content3" class="collapse">
                                    <div class="card-body p-3">
                                        <p><b>Ejemplos:</b></p>
                                        <ul>
                                            <li>Descripciones (escritas o habladas) para todos los gráficos, videos o animaciones.</li>
                                            <li>Equivalentes táctiles (gráficos táctiles) para las claves visuales.</li>
                                            <li>Objetos físicos y modelos espaciales para transmitir la perspectiva o interacción.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="col-lg-3 mt-3 text-center">
                        <img class="img-fluid" src="images/img_s2.png">
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(1)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(3)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
`;
var slideActivityContent = {
};


$(document).ready(function() {

});
