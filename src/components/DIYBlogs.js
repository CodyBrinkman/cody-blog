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
    <br />
    <CardGroup>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '22rem' }}>
              <Card.Img variant="top" src='/images/jewelryantlers.png'/>
              <Card.Body>
                <Card.Title>Deer Antler Jewelry Holder</Card.Title>
                <Card.Text>
                  Learn how to mount deer antlers on a homemade box for a very creative and unique
                  jewelry holder!
                </Card.Text>
                <Link to={'/blogs/DIYBlogs/JewelryAntlers'}>
                  <Button variant="primary">Read Blog</Button>
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
