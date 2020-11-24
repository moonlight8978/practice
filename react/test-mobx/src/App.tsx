import React, { SyntheticEvent, useState } from 'react'
import { observer } from 'mobx-react'
import { Button, Col, Container, Form, ListGroup, Modal, Row } from 'react-bootstrap'
import recipientDomain from './domain/recipient'
import { Formik, Form as FormikForm } from 'formik'
import { Recipient } from './types/local'

const newRecipient = recipientDomain.create({})

const Recipients = observer(() => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onSubmit = (recipient: Recipient) => {
    recipientDomain.recipientsState.addRecipient(recipient)
    handleClose()
  }

  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <span>Danh sách thụ hưởng</span>
        </Col>

        <Col className="d-flex justify-content-end">
          <Button variant="success" onClick={handleShow}>
            Thêm mới +
          </Button>
        </Col>
      </Row>

      <ListGroup className="mt-3">
        {recipientDomain.recipientsState.recipients.map((recipient: Recipient) => (
          <ListGroup.Item
            variant="light"
            key={recipient.accountNumber}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div>
                <span>{recipient.name}</span>
              </div>

              <div className="d-flex align-items-center">
                <h6 className="mb-0 pr-2">STK:</h6>
                <span>{recipient.accountNumber}</span>
              </div>
            </div>

            <div>
              <Button variant="danger" onClick={() => recipientDomain.recipientsState.removeRecipient(recipient)}>
                X
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Formik<Recipient> initialValues={newRecipient} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <FormikForm>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm người thụ hưởng</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form.Group controlId="recipientName">
                    <Form.Label>Tên người thụ hưởng</Form.Label>
                    <Form.Control type="text" placeholder="" value={values.name} onChange={handleChange('name')} />
                  </Form.Group>

                  <Form.Group controlId="recipientAccountNumber">
                    <Form.Label>Số tài khoản</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      value={values.accountNumber}
                      onChange={handleChange('accountNumber')}
                    />
                  </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Đóng
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Lưu
                  </Button>
                </Modal.Footer>
              </Modal>
            </FormikForm>
          )
        }}
      </Formik>
    </div>
  )
})

const Transactions = observer(() => {
  return <div>Lịch sử giao dịch</div>
})

function App() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Transactions />
        </Col>

        <Col>
          <Recipients />
        </Col>
      </Row>
    </Container>
  )
}

export default observer(App)
