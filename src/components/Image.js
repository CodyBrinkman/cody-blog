import React from 'react'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Image = ( {name, caption} ) => {

  return (
  <div>
    <br />
    <Row className="justify-content-md-center">
      <Col xs lg='3'>
        <Figure>
          <Figure.Image
            alt=''
            src={`/images/jewelryantlers/${name}.png`}
          />
          <Figure.Caption>
            {caption}
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  </div>
  )

}

export default Image
