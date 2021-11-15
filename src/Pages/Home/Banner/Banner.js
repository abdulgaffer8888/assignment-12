import React from 'react';
import {Carousel,} from 'react-bootstrap'
const Banner = () => {
  
    return (
<Carousel >
  <Carousel.Item>
  <img
      className="d-block w-100 img-fluid"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/613fce142a0ab61f4055c9b2/cat-home-slider-60th-anniversary.jpg"
      alt="Third slide" 
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100 img-fluid"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5f033d752a0ab62890f9acbe/02-sliders-r6-gytr-1920x748.jpg"
      alt="Third slide" height="230px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://4b4484781e2008fab587-e20327036cbb7cd3b54853c4c640b747.ssl.cf1.rackcdn.com/slider/5f033d752a0ab62890f9acbe/holiday-1920x748-mcy-combo.jpg"
      alt="Third slide" height="230px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;