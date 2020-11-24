import { makeAutoObservable, observable, computed, reaction, toJS } from 'mobx'
import faker from 'faker'
import { Transaction, TransactionForm } from '../types/local'

export class TransactionsState {
  transactions: Transaction[] = []

  constructor(transactions: Transaction[]) {
    makeAutoObservable({
      transactions: observable,
      currentAmount: computed,
    })

    this.transactions = transactions
  }

  createTransaction(form: TransactionForm) {
    const transaction: Transaction = { ...form, id: faker.random.uuid(), createdAt: new Date() }
    this.transactions = [...this.transactions, transaction]
  }

  get currentAmount(): number {
    return this.transactions.reduce((amount, transaction) => {
      amount += transaction.amount
      return amount
    }, 0)
  }
}

const transactionsState = new TransactionsState(JSON.parse(localStorage.getItem('transactions') || '[]'))

reaction(
  () => transactionsState.transactions,
  (observableTransactions) => {
    const transactions = toJS(observableTransactions)
    console.log('Save transactions list', transactions)
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }
)

const transactionDomain = {
  transactionsState,
}

export default transactionDomain
