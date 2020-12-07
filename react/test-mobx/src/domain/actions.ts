import recipientDomain from './recipient'
import transactionDomain from './transaction'

export const createRecipient = (r: any) => recipientDomain.recipientsState.createRecipient(r)
export const deleteRecipient = (r: any) => recipientDomain.recipientsState.deleteRecipient(r)

export const createTransaction = (t: any) => transactionDomain.transactionsState.createTransaction(t)
