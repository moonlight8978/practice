import { action, computed, get, makeObservable, observable, reaction, toJS } from 'mobx'
import { AccountNumber, Recipient } from '../types/local'

const createRecipient = ({ name, accountNumber }: Recipient): Recipient => ({
  name,
  accountNumber,
})

export class RecipientsState {
  recipientsMap: { [key: string]: Recipient } = {}

  constructor(recipientsMap: { [key: string]: Recipient }) {
    makeObservable(this, {
      recipientsMap: observable,
      recipients: computed,
      createRecipient: action,
      deleteRecipient: action,
    })

    this.recipientsMap = recipientsMap
  }

  createRecipient(recipient: Recipient) {
    this.recipientsMap = {
      ...this.recipientsMap,
      [recipient.accountNumber]: recipient,
    }
  }

  deleteRecipient(recipient: Recipient) {
    const { [recipient.accountNumber]: removedRecipient, ...recipients } = toJS(this.recipientsMap)
    this.recipientsMap = recipients
  }

  get recipients(): Recipient[] {
    return Object.values(this.recipientsMap)
  }

  recipient(accountNumber: AccountNumber): Recipient | null {
    return get(this.recipientsMap, accountNumber) || null
  }
}

const recipientsState = new RecipientsState(JSON.parse(localStorage.getItem('recipients') || '{}'))

reaction(
  () => recipientsState.recipientsMap,
  (observableRecipientsMap) => {
    const recipientsMap = toJS(observableRecipientsMap)
    console.log('Save recipients list', recipientsMap)
    localStorage.setItem('recipients', JSON.stringify(recipientsMap))
  }
)

const recipientDomain = {
  recipientsState,
  create: createRecipient,
}

export default recipientDomain
