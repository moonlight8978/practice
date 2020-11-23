import React, { SyntheticEvent, useState } from 'react'
import { observer } from 'mobx-react'
import faker from 'faker'

import './App.css'
import { createUser, UsersState } from './domain/user'

const users = new Array(50).fill(0).map(() =>
  createUser({
    id: faker.random.uuid(),
    age: faker.random.number(),
    name: faker.name.findName(),
  })
)

function App() {
  const [usersState] = useState<UsersState>(new UsersState(users))
  const [filter, setFilter] = useState<{ keyword: string }>({ keyword: '' })
  const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    usersState.filter(filter)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={filter.keyword} onChange={(event) => setFilter({ keyword: event.target.value })} />

        <button type="submit">Filter</button>
      </form>

      {usersState.result.map((user) => (
        <div key={user.id}>
          <div>
            <span>ID：{user.id}</span>
          </div>
          <div>
            <span>名前：{user.name}</span>
          </div>
          <div>
            <span>年齢：{user.age}際</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default observer(App)
