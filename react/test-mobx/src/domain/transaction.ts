import { observable, computed, action, makeObservable, reaction, toJS } from 'mobx'
import faker from 'faker'
import { Transaction, TransactionForm } from '../types/local'

export class TransactionsState {
  transactions: Transaction[] = []
  transactionsMap: { [key: string]: Transaction } = {}

  constructor(transactions: Transaction[]) {
    makeObservable(this, {
      transactions: observable,
      transactionsMap: observable,
      currentAmount: computed,
      createTransaction: action,
    })

    this.transactions = transactions
  }

  createTransaction(form: TransactionForm) {
    const transaction: Transaction = {
      ...form,
      id: faker.random.uuid(),
      createdAt: new Date(),
      amount: 0 - form.amount,
    }
    this.transactions = [...this.transactions, transaction]
    this.transactionsMap = { ...this.transactionsMap, [transaction.id]: transaction }
  }

  get currentAmount(): number {
    return this.transactions.reduce((amount, transaction) => {
      amount += transaction.amount
      return amount
    }, 0)
  }
}

const initTransactions: Transaction[] = [
  {
    id: faker.random.uuid(),
    amount: 50000000,
    recipientAccountNumber: '8978',
    senderAccountNumber: 'system',
    createdAt: new Date(),
  },
]

const transactionsState = new TransactionsState(
  JSON.parse(localStorage.getItem('transactions') || JSON.stringify(initTransactions))
)

reaction(
  () => transactionsState.transactions,
  (observableTransactions) => {
    console.log('changed', observableTransactions)
    const transactions = toJS(observableTransactions)
    console.log('Save transactions list', transactions)
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }
)

const transactionDomain = {
  transactionsState,
}

export default transactionDomain
