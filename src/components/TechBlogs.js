import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TechBlogs = () => {

  return (
    <>
    <h1 style={{paddingLeft: 10}}>Technical Blogs</h1>
    <br />
    <CardGroup>
    <Container>
    <Row>
      <Col>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={require(`../images/awss3.png`)}/>
          <Card.Body>
            <Card.Title>How to use AWS S3 presigned URLs with OCI Object Storage</Card.Title>
            <Card.Text>
              Learn how to use OCI's Amazon S3 Compatibility API to make your S3 presigned URLs
               work with OCI Object Storage.
            </Card.Text>
            <a href='https://blogs.oracle.com/cloud-infrastructure/post/how-to-use-aws-s3-presigned-urls-with-oci-object-storage'>
              <Button variant="primary">Read Blog</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={require(`../images/testocidns.png`)}/>
          <Card.Body>
            <Card.Title>Testing OCI DNS and Traffic Management steering policies before migration</Card.Title>
            <Card.Text>
              DNS changes are scary. This blog walks through an avenue to test your zone's behavior before
              nameserver delegation to ensure a seamless migration.
            </Card.Text>
            <a href='https://blogs.oracle.com/cloud-infrastructure/post/testing-oci-dns-and-traffic-management-steering-policies-before-migration'>
              <Button variant="primary">Read Blog</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={require(`../images/activefailover.png`)}/>
          <Card.Body>
            <Card.Title>Setting up active failover with OCI Traffic Management Steering</Card.Title>
            <Card.Text>
              Oracle has used its investment in Dyn to provide some of the best DNS and Edge capabilities
              in the market, one being active failover. Active failover ensures that sites and web services
              stay online if an issue occurs and works by automatically moving traffic off an unhealthy web
              server to a healthy secondary web server.
            </Card.Text>
            <a href='https://blogs.oracle.com/cloud-infrastructure/post/setting-up-active-failover-with-oci-traffic-management-steering'>
              <Button variant="primary">Read Blog</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={require(`../images/godaddy.png`)}/>
          <Card.Body>
            <Card.Title>GoDaddy DNS management through Oracle Cloud Infrastructure</Card.Title>
            <Card.Text>
              Learn how to start managing your GoDaddy registered domain with OCI DNS.
            </Card.Text>
            <a href='https://blogs.oracle.com/cloud-infrastructure/post/how-to-manage-your-godaddy-domain-with-oci-dns'>
              <Button variant="primary">Read Blog</Button>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
    </CardGroup>
    </>
  )

}

export default TechBlogs
