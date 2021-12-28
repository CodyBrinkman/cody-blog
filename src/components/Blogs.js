import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Blogs = () => {

  return (
    <>
      <h1 style={{paddingLeft: 10}}>My Blogs</h1>
      <CardGroup>
      <Container>
      <Row xs={1} md={2}>
        <Col>
        <Card style={{ width: '18rem' }}>
          {/*}<Card.Img variant="top" src={require(`../images/${blog.filename}.png`)} thumbnail/>*/}
          <Card.Body>
            <Card.Title>Test Blog 1</Card.Title>
            <Card.Text>
              This is an example for blog 1
            </Card.Text>
            <Link to={"/blogs/TestBlog1"}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          {/*}<Card.Img variant="top" src={require(`../images/${blog.filename}.png`)} thumbnail/>*/}
          <Card.Body>
            <Card.Title>Test Blog 2</Card.Title>
            <Card.Text>
              This is an example for blog 2
            </Card.Text>
            <Link to={"/blogs/TestBlog1"}>
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

export default Blogs
