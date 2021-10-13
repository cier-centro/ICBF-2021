var slideTitle = 'Diseño Universal del Aprendizaje'
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
        
        <div class="row content-row justify-content-center">
            <div class="list-of-items mb-5" style="width: 500px;">
                <div class="row item-button align-items-center">
                    <div class="icon-holder col-3 p-3 align-items-center justify-content-center d-flex">
                        <img class="img-fluid" src="images/img_s12.png">
                    </div>
                    <div class="col-8 item-text">
                        <p><b>Fase 3</b></p>
                        <p>Implementación del POAI</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row collapse-light">
                <div class="col-sm-4 col-lg-4 my-5">
                    <div>
                    <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_1" role="button" aria-expanded="false" aria-controls="collapse_1"> 1 </button>
                    </div>
                    <div>
                    <div class="collapse collapse-body" id="collapse_1">
                        <p class="text-green-dark">Se requiere llevar a cabo las acciones que han sido diseñadas en el POAI para cada uno de los componentes de atención o las estrategias transversales definidas; así, al interior del servicio, se adelantarán las diferentes acciones que se articulen con los demás sectores y actores identificados.</p>
                    </div>
                    </div>
                </div>

                <div class="col-sm-4 col-lg-4 my-5">
                    <div>
                    <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_2" role="button" aria-expanded="false" aria-controls="collapse_2"> 2 </button>
                    </div>
                    <div>
                    <div class="collapse collapse-body" id="collapse_2">
                        <p class="text-green-dark">Es fundamental el apoyo de los equipos de primera infancia de las regionales y centros zonales y del SNBF. Este apoyo juega un papel clave para la gestión y planeación correspondiente en el territorio, pues conlleva a la efectiva garantía de las atenciones señaladas en la RIA y, por ende, las realizaciones que orientan la política pública.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 col-lg-4 my-5">
                    <div>
                    <button class="btn btn-collapse-item" data-toggle="collapse" href="#collapse_3" role="button" aria-expanded="false" aria-controls="collapse_3"> 3 </button>
                    </div>
                    <div>
                    <div class="collapse collapse-body" id="collapse_3">
                        <p class="text-green-dark">Las propuestas del POAI deben ser coherentes con lo identificado en el proceso de diagnóstico situacional, y visibilizar la diversidad de infancias, familias y contextos que confluyen en el proceso de atención. A su vez, el POAI se convierte en el insumo a partir del cual se brindará sentido, identidad y contenido a la propuesta del plan de acompañamiento a las familias y del proyecto pedagógico, entre otros.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col">
                <a href="#" onclick="currentSlide(11)" class="btn btn-link btn-back float-left"></a>
                <a href="#" onclick="currentSlide(13)" id="btnNext" class="btn btn-link btn-next float-right"></a>
            </div>
        </div>
    </div>
</div>
`
var slideActivityContent = {}

$(document).ready(function () {})