export type AccountNumber = string

export interface Card {
  accountNumber: AccountNumber
  name: string
}

export interface Recipient extends Card {}

export interface Transaction {
  id: string
  senderAccountNumber: AccountNumber
  recipientAccountNumber: AccountNumber
  amount: number
  createdAt: Date
}

export interface TransactionForm extends Transaction {
  id?: string | null
  createdAt?: Date | null
}
