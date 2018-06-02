import Form from '../components/form'

import Dump from '../components/re-render/dump'
import UsingPureComponent from '../components/no-re-render/using-pure-component'
import UsingComponent from '../components/no-re-render/using-component'

function Index() {
  return (
    <div>
      <h5 style={{ margin: 0, fontSize: 16 }}>Without children (1)</h5>
      <Form />

      <div style={{ margin: '20px' }}></div>

      <h5 style={{ margin: 0, fontSize: 16 }}>Using children (2)</h5>
      <Form>
        <Dump n="2" />

        <UsingPureComponent n="2" />
        <UsingComponent n="2" />
      </Form>
    </div>
  )
}

export default Index
