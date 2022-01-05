import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselPage = () => {

  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../images/jewelryantlers.png`)}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Deer Antler Jewelry Holder</h3>
            <p>View DIY Blogs for Build</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../images/manofdreams.png`)}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Man of Dreams Picture Holder</h3>
            <p>View DIY Blogs for Build</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../images/cuttingboard.png`)}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Custom Cutting Board</h3>
            <p>View DIY Blogs for Build</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )

}

export default CarouselPage
