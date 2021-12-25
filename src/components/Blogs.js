import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Blogs = ({ blogs }) => {

  return (
    <>
      <h1>Blogs</h1>
      <CardGroup>
      <Container>
      <Row>
      {blogs.map((blog, i) =>
        <Col>
        <Card key={i} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require(`../images/${blog.filename}.png`)} thumbnail/>
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              {blog.description}
            </Card.Text>
            <Link to={`/blogs/${blog.filename}`}>
              <Button variant="primary">Read Blog</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      )}
      </Row>
      </Container>
      </CardGroup>
    </>

  )

}

export default Blogs
