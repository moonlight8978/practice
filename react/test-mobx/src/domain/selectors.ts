import { AccountNumber, Card } from './../types/local.d'
import accountDomain from './account'
import recipientDomain from './recipient'
import transactionDomain from './transaction'

export const getCards = (): Card[] =>
  accountDomain.accountState.cards.concat(recipientDomain.recipientsState.recipients)

export const getCard = (accountNumber: AccountNumber): Card | undefined => {
  const cards = getCards()
  return cards.find((card) => card.accountNumber === accountNumber)
}

export const getCurrentAmount = () => transactionDomain.transactionsState.currentAmount

export const getPrimaryCard = () => accountDomain.accountState.primaryCard

export const getRecipients = () => recipientDomain.recipientsState.recipients

export const getTransactions = () => transactionDomain.transactionsState.transactions
