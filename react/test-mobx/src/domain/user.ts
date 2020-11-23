import { action, computed, makeAutoObservable, observable } from 'mobx'

export interface User {
  id: string
  name: string
  age: number
}

export const createUser = ({ name, age, id }: Partial<User>): User => ({
  id,
  name,
  age,
})

export class UsersState {
  keyword: string = ''
  users: User[] = []

  constructor(users: User[]) {
    makeAutoObservable(this, {
      keyword: observable,
      filter: action,
      result: computed,
    })

    this.users = users
  }

  filter({ keyword }: { keyword: string }) {
    this.keyword = keyword
  }

  get result() {
    return this.users.filter((user) => !!user.name?.includes(this.keyword))
  }
}
