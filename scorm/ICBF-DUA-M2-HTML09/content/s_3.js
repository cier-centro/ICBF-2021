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
                            <div class="icon-holder col-3 p-3 align-items-center justify-content-center d-flex">
                                <img class="img-fluid" src="images/img_s2_opc.png">
                            </div>
                            <div class="col-8 item-text">
                                <p><b>Principio II</b></p>
                                <p>Pauta 5: Proporcionar opciones de habilidades expresivas y la fluidez</p>
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
                                            Permitir opciones de formas de comunicación.
                                        </p>
                                    </div>
                                    <div class="down-pointer">
                                        <img class="img-fluid" src="images/img_arrow_dropdown.png">
                                    </div>
                                </button>
                                <div id="content1" class="collapse">
                                    <div class="card-body p-3">
                                        <p><b>Ejemplos:</b></p>
                                        <p>Componer en varios medios o formatos:</p>
                                        <ul>
                                            <li>Usar objetos físicos manipulables (bloques, modelos 3D, regletas, ábacos, etc.).</li>
                                            <li>Usar y/o proporcionar aplicaciones de comunicación y herramientas web interactivas.</li>
                                            <li>Utilizar diferentes estrategias para la resolución de problemas.</li>
                                            <li>Componer manejando múltiples medios (texto, voz, dibujos, video, música, movimiento, arte visual, esculturas, etc.).</li>
                                        </ul>
                                    </div>
                                </div>
                                <button class=" btn collapsed card-header d-flex align-items-center item-even" data-toggle="collapse" data-target="#content2" aria-expanded="false" aria-controls="content2">
                                    <div class="title-number">
                                        2
                                    </div>
                                    <div class="title-item">
                                        <p class="mb-0">
                                            Proveer formas de apoyo, andamiaje y desempeño graduado.
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
                                            <li>Proporcionar diferentes modelos para simular; es decir, modelos que muestran los mismos resultados, pero usan diferentes enfoques, estrategias, habilidades, etc.</li>
                                            <li>Proporcionar diferentes tutores; es decir, agentes educativos y pares que utilizan diferentes métodos para motivar, orientar, informar o comentar.</li>
                                            <li>Proporcionar apoyos que puedan retirarse gradualmente según aumenta de la independencia, habilidades y autonomía. </li>
                                            <li>Proporcionar retroalimentación diferenciada (por ejemplo, información que esa accesible y que puede adaptarse o personalizarse).</li>
                                            <li>Proporcionar ejemplos de soluciones novedosas a problemas reales.</li>
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
                <a href="#" onclick="currentSlide(2)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(4)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
`;
var slideActivityContent = {
};


$(document).ready(function() {

});
