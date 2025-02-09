import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BsCheckCircle } from 'react-icons/bs';
import './css/home.css'

const Home = () => {
    return (
        <div className='backContent'>
            <Navbar />
            <div>
                <div className='content'>
                    <div className='text-overlay d-flex flex-column align-items-center text-center p-4'>
                        <h1 className='fw-bold title'>Proyectos del Golfo y Servicios de Automatización</h1>
                        <p className='fs-5 mt-3 description' style={{ maxWidth: '800px' }}>
                            Somos líderes en proveeduría de servicios e insumos para el sector industrial. Todo tipo de suministros industriales y de tecnología.
                        </p>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className="row featurette mt-5" bis_skin_checked="1">
                        <div className="col-md-7 mt-5" bis_skin_checked="1">
                            <h2 className="featurette-heading fw-normal lh-1">INGENIERÍA Y DISEÑO</h2>
                            <p className="lead">SOMOS ESPECIALISTAS EN EL DISEÑO, INGENIERÍA, MANTENIMIENTO Y CAPACITACIÓN </p>
                            <ul className="services-list m-4">
                                <li><BsCheckCircle className="service-icon" /> SISTEMA DE CONTROL DISTRIBUIDO (SCD)</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMA DE CONTROL Y ADQUISICIÓN DE DATOS (SCADA)</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMAS DE CONTROL A BASE DE PLC</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMAS DE PARO DE EMERGENCIA (ESD)</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMAS DE GAS Y FUEGO (F&G)</li>
                                <li><BsCheckCircle className="service-icon" /> MEDICIÓN E INSTRUMENTACIÓN DE CAMPO</li>
                                <li><BsCheckCircle className="service-icon" /> CAPACITACIONES Y ASESORÍAS EN SISTEMAS AUTOMÁTICOS</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMA DE ALIMENTACIÓN ININTERRUMPIDA; DE GRADO INDUSTRIAL (UPS)</li>
                                <li><BsCheckCircle className="service-icon" /> SISTEMAS FOTOVOLTAICO, AMBIENTE TERRESTRE Y MARINO</li>
                                <li><BsCheckCircle className="service-icon" /> MEDICIÓN E INSTRUMENTACIÓN DE CAMPO INALÁMBRICA (WIRELESS RADIO)</li>
                                <li><BsCheckCircle className="service-icon" /> RUTEADO Y CANALIZACIÓN ELÉCTRICA Y/O DATOS</li>
                            </ul>
                        </div>
                        <div className="col-md-5 mt-5 mb-5" bis_skin_checked="1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
                        </div>
                    </div>

                </div>
                <div className="servicesHome ">
                    <div className="container px-4 py-5" id="icon-grid">
                        <h2 className="fw-bold pb-2 border-bottom titleServicesHome">PORTAFOLIO DE SERVICIOS </h2>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 m-3">
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className="mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS FOTOVOLTAICOS
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className=" mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS DE AUTOMATIZACIÓN Y FIBRA ÓPTICA
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className="mb-0 fs-4 text-body-emphasis">SUMINISTRO E INSTALACIÓN DE SISTEMAS DE ENERGÍA ININTERRUMPIBLE UPS
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className=" mb-0 fs-4 text-body-emphasis">INSTALACIÓN DE CANALIZACIÓN ELÉCTRICA
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className="mb-0 fs-4 text-body-emphasis">FABRICACIÓN Y HABILITACIÓN DE SOPORTERIA PARA INSTRUMENTACIÓN 
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className="mb-0 fs-4 text-body-emphasis">MANTENIMIENTO A INSTRUMENTACIÓN INDUSTRIAL
                                    </h3>
                                   
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                              
                                <div>
                                    <h3 className="mb-0 fs-4 text-body-emphasis">CALIBRACIÓN DE TRANSMISORES, SENSORES, VÁLVULAS, POSICIONADORES
                                    </h3>
                                </div>
                            </div>
                            <div className="col d-flex align-items-start">
                            <i class="bi bi-gear-fill bi text-body-secondary flex-shrink-0 serviceHomeIcon"></i>   
                                <div>
                                    <h3 className=" mb-0 fs-4 text-body-emphasis">PROYECTOS LLAVE EN MANO
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home

