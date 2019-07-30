import React from 'react';
import medellin1 from '../img/medellin1.png';
import medellin2 from '../img/medellin2.png';
import medellin3 from '../img/medellin3.png';
import '../styles/index.css'

const Main=()=>{
    return(
<div>
<main id="main">
        <div className="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={medellin1} class="d-block w-100" alt="Medellin 1"/>
                </div>
                <div className="carousel-item">
                    <img src={medellin2} class="d-block w-100" alt="Medellin 2"/>
                </div>
                <div className="carousel-item">
                    <img src={medellin3} class="d-block w-100" alt="Medellin 3"/>
                </div>
                <div class="overlay">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6 offset-md-6 text-center text-md-right">
                                <h1>Geek Conf Medellín</h1>
                                <p class="d-none d-md-block">Geek conf realiza su primer Demo Day con la cohorte de 
                                    Línea 1: FrontEnd, donde los Geeks entrenados evidencian
                                    por medio de un proyecto todas las habilidades y conocimientos
                                    técnicos adquiridos durante el curso.
                                </p>
                                <a href="#" class="btn btn-outline-light">Quiero ser orador</a>
                                <button type="button" class="btn btn-geek" data-toggle="Modal" data-target="#modalCompra">Comprar Tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

    )
}
export default Main;