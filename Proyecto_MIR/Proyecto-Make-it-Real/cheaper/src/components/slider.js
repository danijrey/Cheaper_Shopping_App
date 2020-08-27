import React from 'react';
import food from '../assets/food.png';
import fruver from '../assets/fruver.png';
import carne from '../assets/CarneSlider.jpg';
import pan from '../assets/pan.png';
import chocolate from '../assets/chocolate.png';
import Carousel from 'react-bootstrap/Carousel'
import './slider.css';

class Slider extends React.Component {

    render() {
      return (
        <Carousel className="container-slider" data-testid="Slider">
            <Carousel.Item>
                <img
                    className="Food"
                    src={food}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="H3-Food">Descuentos hasta del 40%</h3>
                    <p className="P-Food">Pagando con tu tarjeta Éxito.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Fruver"
                    src={fruver}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="H3-Fruver">Frutas siempre frsecas</h3>
                    <p className="P-Fruver">Aprovecha, tenemos promociones todos los Jueves</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Pan"
                    src={pan}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="H3-Pan">Tenemos sorpresas para ti</h3>
                    <p className="P-Pan">Solo en Jumbo, obtienes el 50%.Todos los Sábados</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Chocolate"
                    src={chocolate}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="H3-Chocolate">Lo que más te gusta</h3>
                    <p className="P-Chocolate">Aprovecha la oferta en chocolates Suizos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="Carne"
                    src={carne}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="H3-Carne">25% De descuento</h3>
                    <p className="P-Carne">Todos los Martes en la Vaquita</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        )

    }
}

export default Slider;
