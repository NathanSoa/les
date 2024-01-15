import {
  Address,
  Card,
  Customer,
  EmptyCustomer,
} from '@/app/domain/customer/entity'

import { useState } from 'react'

type PartialCard = Omit<Card, 'main'>

export function useCustomer() {
  const [customer, setCustomer] = useState<Customer>(EmptyCustomer)

  function addAddress(address: Address) {
    if (!customer) return
    address.country = 'Brasil'
    address.complement = address.complement ?? ''
    setCustomer({
      ...customer,
      address: [...customer.address, address],
    })
  }

  function addCard(card: PartialCard) {
    if (!customer) return

    setCustomer({
      ...customer,
      cards: [...customer.cards, { ...card, main: false }],
    })
  }

  function updateCustomer(customer: Customer) {
    setCustomer(customer)
  }

  function editAddress(address: Address) {
    if (!customer) return
    setCustomer({
      ...customer,
      address: customer.address.map((a) =>
        a.zipCode === address.zipCode ? address : a,
      ),
    })
  }

  function editCard(card: Card) {
    if (!customer) return

    setCustomer({
      ...customer,
      cards: customer.cards.map((c) => (c.number === card.number ? card : c)),
    })
  }

  function removeCard(card: Card) {
    if (!customer) return
    setCustomer({
      ...customer,
      cards: customer.cards.filter((c) => c.number !== card.number),
    })
  }

  function removeAddress(address: Address) {
    if (!customer) return
    setCustomer({
      ...customer,
      address: customer.address.filter((a) => a.zipCode !== address.zipCode),
    })
  }

  function markCardAsMain(card: Card) {
    if (!customer) return

    const mainCard = customer.cards.find((c) => c.number === card.number)

    if (!mainCard) return

    customer.cards.forEach((c) => {
      c.main = false
      editCard(c)
    })

    if (mainCard.number === card.number) {
      mainCard.main = true
      editCard(mainCard)
    }
  }

  return {
    customer,
    setCustomer,
    updateCustomer,
    markCardAsMain,
    addAddress,
    addCard,
    editAddress,
    editCard,
    removeCard,
    removeAddress,
  }
}
