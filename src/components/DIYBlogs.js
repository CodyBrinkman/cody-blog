import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DIYBlogs = () => {

  return (
    <>
    <h1 style={{paddingLeft: 10}}>DIY Blogs</h1>
    <div style={{fontSize: 22, paddingLeft: 10, paddingRight: 10}}>
    The best gifts are the ones you can't buy online or in a store. I promise you all of these blogs can be done with basic tools and a small budget - the only requirement is the willingness to go out of your comfort zone!
    <br />
    <br />
    </div>
    <CardGroup>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant='top' src='/images/jewelryantlers/jewelryantlers.png'/>
              <Card.Body>
                <Card.Title>Deer Antler Jewelry Holder</Card.Title>
                <Card.Text>
                  Learn how to mount deer antlers on a homemade box for a very creative and unique
                  jewelry holder!
                </Card.Text>
                <Link to={'/blogs/DIYBlogs/JewelryAntlers'}>
                  <Button variant='primary'>Read Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant='top' src='/images/manofdreams/manofdreams.png'/>
              <Card.Body>
                <Card.Title>Man of Your Dreams Picture Holder</Card.Title>
                <Card.Text>
                  Learn how to build this creative gift that brings a smile to anyone who looks at it!
                </Card.Text>
                <Link to={'/blogs/DIYBlogs/ManOfDreams'}>
                  <Button variant='primary'>Read Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant='top' src='/images/cuttingboard/cuttingboard.png'/>
              <Card.Body>
                <Card.Title>Custom Cutting Board</Card.Title>
                <Card.Text>
                  Learn how to build your own cutting board!
                </Card.Text>
                <Link to={'/blogs/DIYBlogs/CuttingBoard'}>
                  <Button variant='primary'>Read Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant='top' src='/images/snowman/snowman.png'/>
              <Card.Body>
                <Card.Title>Wooden Snowman</Card.Title>
                <Card.Text>
                  Learn how to build this perfect Christmas gift!
                </Card.Text>
                <Link to={'/blogs/DIYBlogs/Snowman'}>
                  <Button variant='primary'>Read Blog</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </CardGroup>
    </>
  )

}

export default DIYBlogs
