import React from 'react'
import { observer } from 'mobx-react'
import { Col, Container, Row } from 'react-bootstrap'
import TransactionList from './TransactionList'
import RecipientList from './RecipientList'

const Account = observer(() => {
  return <span>Số dư: 50.000.000VNĐ</span>
})

function App() {
  return (
    <Container className="my-4">
      <div className="text-center mb-5">
        <Account />
      </div>

      <Row>
        <Col>
          <TransactionList />
        </Col>

        <Col>
          <RecipientList />
        </Col>
      </Row>
    </Container>
  )
}

export default observer(App)
