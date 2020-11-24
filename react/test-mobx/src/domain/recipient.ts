import { action, autorun, computed, makeAutoObservable, observable, remove, set, toJS } from 'mobx'
import { AccountNumber, Recipient } from '../types/local'

const createRecipient = ({ name, accountNumber }: Partial<Recipient>): Recipient => ({
  name,
  accountNumber,
})

export class RecipientsState {
  recipientsMap: { [key: AccountNumber]: Recipient } = {}

  constructor(recipientsMap: { [key: AccountNumber]: Recipient }) {
    makeAutoObservable(this, {
      recipientsMap: observable,
      recipients: computed,
      addRecipient: action,
      removeRecipient: action,
    })

    this.recipientsMap = recipientsMap
  }

  addRecipient(recipient: Recipient) {
    set(this.recipientsMap, recipient.accountNumber, recipient)
  }

  removeRecipient(recipient: Recipient) {
    remove(this.recipientsMap, recipient.accountNumber)
  }

  get recipients(): Recipient[] {
    return Object.values(this.recipientsMap)
  }
}

const recipientsState = new RecipientsState(JSON.parse(localStorage.getItem('recipients')) || {})

autorun(() => {
  console.log(toJS(recipientsState.recipients))
})

const recipientDomain = {
  recipientsState,
  create: createRecipient,
}

export default recipientDomain
