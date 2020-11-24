import { computed, makeAutoObservable, observable } from 'mobx'
import { Card } from '../types/local'

export class AccountState {
  cards: Card[] = [{ name: 'Le Bach', accountNumber: '8978' }]

  primaryAccountNumber: string = '8978'

  constructor() {
    makeAutoObservable({
      cards: observable,
      primaryAccountNumber: observable,
      primaryCard: computed,
    })
  }

  get primaryCard(): Card {
    return this.cards.find((card) => card.accountNumber === this.primaryAccountNumber) as Card
  }
}

const accountState = new AccountState()

const accountDomain = {
  accountState,
}

export default accountDomain
