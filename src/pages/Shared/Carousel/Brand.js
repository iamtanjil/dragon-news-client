import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assests/brand/Brand1.png';
import Brand2 from '../../../assests/brand/Brand2.jpg';


const Brand = () => {
    return (
        <div className='mt-2'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Brand;