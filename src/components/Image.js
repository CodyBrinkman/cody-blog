import React, { useState } from 'react'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Image = ( {name, caption} ) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
  <div>
    <br />
    <Row className="justify-content-md-center">
      <Col xs lg='3'>
        <Figure onClick={() => handleShow()} style={{'cursor':'pointer'}}>
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
    <Modal show={show} onHide={handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{caption}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Figure onClick={() => handleShow()}>
          <Figure.Image
            alt=''
            src={`/images/jewelryantlers/${name}.png`}
          />
        </Figure>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )

}

export default Image
