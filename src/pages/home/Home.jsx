import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

import './css/home.css';
import CarouselMarcas from '../../components/carrouselMarcas/CarouselMarcas';

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.2 });

        elements.forEach((element) => {
            observer.observe(element);
        });
    }, []);

    return (
        <div className='backContent'>
            <Navbar />
            <div>
                <div className='content '>
                    <div className='text-overlay d-flex flex-column align-items-center text-center p-4'>
                        <h1 className='fw-bold title'>Proyectos del Golfo y Servicios de Automatización</h1>
                        <p className='fs-5 mt-3 description' style={{ maxWidth: '800px' }}>
                            Somos líderes en proveeduría de servicios e insumos para el sector industrial. Todo tipo de suministros industriales y de tecnología.
                        </p>
                    </div>
                </div>

                <div className='container mt-5'>
                    <div className="row featurette mt-5 scroll-animate">
                        <div className="col-md-7 mt-5">
                            <h2 className="featurette-heading fw-normal lh-1">INGENIERÍA Y DISEÑO</h2>
                            <p className="lead">SOMOS ESPECIALISTAS EN EL DISEÑO, INGENIERÍA, MANTENIMIENTO Y CAPACITACIÓN </p>
                            <ul className="services-list m-4">
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMA DE CONTROL DISTRIBUIDO (SCD)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMA DE CONTROL Y ADQUISICIÓN DE DATOS (SCADA)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMAS DE CONTROL A BASE DE PLC</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMAS DE PARO DE EMERGENCIA (ESD)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMAS DE GAS Y FUEGO (F&G)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> MEDICIÓN E INSTRUMENTACIÓN DE CAMPO</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> CAPACITACIONES Y ASESORÍAS EN SISTEMAS AUTOMÁTICOS</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMA DE ALIMENTACIÓN ININTERRUMPIDA; DE GRADO INDUSTRIAL (UPS)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> SISTEMAS FOTOVOLTAICO, AMBIENTE TERRESTRE Y MARINO</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> MEDICIÓN E INSTRUMENTACIÓN DE CAMPO INALÁMBRICA (WIRELESS RADIO)</li>
                                <li className="service-icon"> <i className="bi bi-check2-circle m-1"></i> RUTEADO Y CANALIZACIÓN ELÉCTRICA Y/O DATOS</li>
                            </ul>
                        </div>
                        <div className="col-md-5 mt-5 mb-5 imagenList">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src="/pgosarecurso.png" alt="pgosarecurso" />

                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 scroll-animate'>
                <div className='descripcionHome'>
                    <div className='d-flex flex-column align-items-center text-center p-5'>
                        <p className='fw-bold fs-3' style={{ maxWidth: '800px' }}>
                            Especializados en productos y servicios de automatización a la industria petroquímica y similares.
                        </p>
                    </div>
                </div>
            </div>

            <div className="servicesHome scroll-animate">
                <div className="container px-4 py-5" id="icon-grid">
                    <h2 className="fw-bold pb-2 border-bottom titleServicesHome">PORTAFOLIO DE SERVICIOS</h2>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 py-5 m-2">
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-bodyflex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS FOTOVOLTAICOS</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS DE AUTOMATIZACIÓN Y FIBRA ÓPTICA</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS DE ENERGÍA ININTERRUMPIBLE UPS</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">INSTALACIÓN DE CANALIZACIÓN ELÉCTRICA</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">FABRICACIÓN Y HABILITACIÓN DE SOPORTERIA PARA INSTRUMENTACIÓN</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">MANTENIMIENTO A INSTRUMENTACIÓN INDUSTRIAL</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">CALIBRACIÓN DE TRANSMISORES, SENSORES, VÁLVULAS, POSICIONADORES</h3>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <i className="bi bi-gear-fill bi text-body- flex-shrink-0 serviceHomeIcon"></i>
                            <div>
                                <h3 className="mb-0 fs-4 text-body-emphasis">PROYECTOS LLAVE EN MANO</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='scroll-animate'>
                <div className='descripcionMarcas'>
                    <div className='d-flex flex-column align-items-center text-center p-5'>
                        <p className='fw-bold fs-3' style={{ maxWidth: '800px' }}>
                            Servicios e insumos para el sector industrial.
                        </p>
                    </div>
                </div>
            </div>

            <div className='MarcasComercializadasHome d-flex flex-column align-items-center text-center mt-5'>
                <p className='fw-bold fs-3' style={{ maxWidth: '900px' }}>   MARCAS QUE COMERCIALIZAMOS  </p>
            </div>
            <div className='scroll-animate'>

                <div className='marcasComercializadas'>
                    <div className='d-flex flex-column align-items-center text-center '>
                        <CarouselMarcas />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Home;
