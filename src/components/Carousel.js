import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const CarouselPage = () => {

  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/jewelryantlers/jewelryantlers.png'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Deer Antler Jewelry Holder</h3>
            <Link to={'/blogs/DIYBlogs/JewelryAntlers'}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/manofdreams/manofdreams.png'
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Man of Dreams Picture Holder</h3>
            <Link to={'/blogs/DIYBlogs/ManOfDreams'}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/cuttingboard/cuttingboard.png'
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Custom Cutting Board</h3>
            <Link to={'/blogs/DIYBlogs/CuttingBoard'}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='/images/snowman/snowman.png'
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{color: 'black'}}>Wooden Snowman</h3>
            <Link to={'/blogs/DIYBlogs/Snowman'}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )

}

export default CarouselPage
