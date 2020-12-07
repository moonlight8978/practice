import React, { useMemo, useState } from 'react'
import { observer } from 'mobx-react'
import { Button, Col, Form, ListGroup, Modal, Row } from 'react-bootstrap'
import { Formik, FormikHelpers } from 'formik'
import { Recipient, Transaction, TransactionForm } from './types/local'
import { getCard, getPrimaryCard, getRecipients, getTransactions } from './domain/selectors'
import { createTransaction } from './domain/actions'

const TransactionListItem = observer(({ transaction }: { transaction: Transaction }) => {
  const recipient = getCard(transaction.recipientAccountNumber)
  const recipientName = recipient?.name || 'unknown'

  return (
    <ListGroup.Item variant="light" key={transaction.id}>
      <div>
        <div>
          <span>
            {transaction.senderAccountNumber} → {transaction.recipientAccountNumber} ({recipientName})
          </span>
        </div>

        <div className="d-flex align-items-center">
          <h6 className="mb-0 pr-2">Amount:</h6>
          <span>{transaction.amount.toLocaleString()}VNĐ</span>
        </div>
      </div>
    </ListGroup.Item>
  )
})

const TransactionList = observer(() => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onSubmit = (form: TransactionForm, helpers: FormikHelpers<TransactionForm>) => {
    createTransaction(form)
    helpers.resetForm()
    handleClose()
  }

  const sender = getPrimaryCard()

  const recipients = getRecipients()

  const newTransaction = useMemo<TransactionForm>(
    () => ({
      amount: 0,
      recipientAccountNumber: recipients[0]?.accountNumber,
      senderAccountNumber: sender.accountNumber,
    }),
    [sender.accountNumber, recipients]
  )

  const transactions = getTransactions()

  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <span>Lịch sử giao dịch</span>
        </Col>

        <Col className="d-flex justify-content-end">
          <Button variant="success" onClick={handleShow}>
            Chuyển tiền +
          </Button>
        </Col>
      </Row>

      <ListGroup className="mt-3">
        {transactions.length === 0 && <ListGroup.Item variant="light">Không có giao dịch nào gần đây</ListGroup.Item>}

        {transactions.map((transaction: Transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Formik<TransactionForm> initialValues={newTransaction} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => {
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>Giao dịch mới</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form.Group controlId="senderAccountNumber">
                    <Form.Label>Người gửi</Form.Label>
                    <Form.Control type="text" value={values.senderAccountNumber} readOnly />
                  </Form.Group>

                  <Form.Group controlId="recipientAccountNumber">
                    <Form.Label>Người nhận</Form.Label>
                    <Form.Control
                      as="select"
                      value={values.recipientAccountNumber}
                      onChange={handleChange('recipientAccountNumber')}
                    >
                      {recipients.map((recipient: Recipient) => (
                        <option value={recipient.accountNumber} key={recipient.accountNumber}>
                          {`${recipient.accountNumber} (${recipient.name})`}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="amount">
                    <Form.Label>Số tiền</Form.Label>
                    <Form.Control type="number" value={values.amount} onChange={handleChange('amount')} />
                  </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Đóng
                  </Button>
                  <Button variant="primary" type="submit">
                    Chuyển tiền
                  </Button>
                </Modal.Footer>
              </Form>
            )
          }}
        </Formik>
      </Modal>
    </div>
  )
})

export default TransactionList
