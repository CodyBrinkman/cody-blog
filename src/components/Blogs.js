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
      <br />
      <CardGroup>
      <Container>
      <Row xs={1} md={2}>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src='/images/diyblogs.png'/>
            <Card.Body>
              <Card.Title>DIY Blogs</Card.Title>
              <Card.Text>
                For the handyman in you. These blogs walk you through building some really cool things
                using basic resources and tools. If you want to make your significant other something they will love,
                 unique pieces for you home, or just want to work on your building skills, these blogs are for you.
              </Card.Text>
              <Link to={"/blogs/DIYBlogs"}>
                <Button variant="primary">View DIY Blogs</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src='/images/techblogs.png'/>
            <Card.Body>
              <Card.Title>Technical Blogs</Card.Title>
              <Card.Text>
                For the nerd in you. These are blogs I have written about cool things you
                 can do with various Cloud technologies.
              </Card.Text>
              <Link to={"/blogs/TechBlogs"}>
                <Button variant="primary">View Tech Blogs</Button>
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
