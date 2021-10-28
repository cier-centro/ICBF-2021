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
                <div class="row content-center">
                    <p class="p-box">Bienvenidos y bienvenidas al módulo 1: Política de atención integral a la primera infancia. Les invitamos a navegar por los diferentes contenidos para conocer las generalidades sobre el tema.</p>
                    <p class="p-box">Haga clic sobre los títulos para conocer los contenidos</p>
                </div>
                <div class="row d-flex align-items-center">
                    <div class="row mb-4 justify-content-between">
                        <div class="col-lg-2 col-md-4 col-sm-10">
                            <button class="d-flex btn row" onclick="currentSlide(3)">
                                <img class="img-fluid" src="images/img_btn1.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center">Política de Atención Integral a la Primera Infancia “De Cero a Siempre"</p>
                                </button>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-10">
                            <button class="d-flex btn row" onclick="currentSlide(4)">
                                <img class="img-fluid" src="images/img_btn2.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center">Estrategia de Atención Integral a la Primera Infancia “De Cero a Siempre"</p>
                                </button>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-10">
                            <button class="d-flex btn row" onclick="currentSlide(5)">
                                <img class="img-fluid" src="images/img_btn3.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center">Fundamentos políticos, técnicos y de gestión de la Estrategia de Atención Integral a la Primera Infancia</p>
                                </button>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-10">
                            <button class="d-flex btn row" onclick="currentSlide(6)">
                                <img class="img-fluid" src="images/img_btn4.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center">Recorrido por la política pública de primera infancia</p>
                                </button>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-10">
                            <button class="d-flex btn row pr-4" onclick="currentSlide(7)">
                                <img class="img-fluid" src="images/img_btn5.png" alt="Ilustración elementos">
                                <p class="tx-dark-green text-center">Diversidad en la educación infantil</p>
                                </button>
                        </div>
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
