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
            src='/images/jewelryantlers.png'
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
            src='/images/manofdreams.png'
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
            src='/images/cuttingboard.png'
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
