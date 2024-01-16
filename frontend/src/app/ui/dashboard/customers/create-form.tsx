'use client'

import Button from '@/app/ui/common/button'
import AlignedInputs from '@/app/ui/common/aligned-inputs'
import Input from '@/app/ui/common/input'
import InputContainer from '@/app/ui/common/input-container'
import InfoCard from '@/app/ui/common/info-card'
import Modal from '@/app/ui/common/modal'
import AddressForm from '@/app/ui/dashboard/customers/address-form'
import CardForm from '@/app/ui/dashboard/customers/card-form'
import Form from '@/app/ui/common/form'

import { env } from '@/app/config/environment'

import { useModal } from '@/app/hooks/useModal'
import { useNormalizer } from '@/app/hooks/useNormalizer'
import { useCustomer } from '@/app/hooks/useCustomer'

import { CustomerZodValidation } from '@/app/validation/customer-zod-validation'

import { http } from '@/app/infra/http-fetch'

import { Star, X } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { z } from 'zod'
import clsx from 'clsx'

export default function CustomerCreateForm() {
  const {
    customer,
    addAddress,
    addCard,
    removeCard,
    removeAddress,
    markCardAsMain,
  } = useCustomer()

  const { normalizePhoneNumber, normalizeCpf, normalizeDate } = useNormalizer()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof CustomerZodValidation>>({
    resolver: zodResolver(CustomerZodValidation),
  })

  const {
    isOpen: showAddressModal,
    closeModal: closeAddressModal,
    openModal: openAddressModal,
  } = useModal()

  const {
    isOpen: showCardModal,
    closeModal: closeCardModal,
    openModal: openCardModal,
  } = useModal()

  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [cpf, setCpf] = useState('')

  function handleS(data: any) {
    console.log(data)

    http({
      url: `${env.SERVER}/customers`,
      method: 'POST',
      body: {},
    })
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log('erro', err)
      })
  }

  return (
    <Form onSubmit={handleSubmit(handleS)}>
      <InputContainer>
        <label htmlFor="name">Nome *</label>
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
        <Input type="text" {...register('name')} />
      </InputContainer>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="cpf">CPF *</label>
          {errors.cpf && (
            <span className="text-sm text-red-500">{errors.cpf.message}</span>
          )}
          <Input
            type="text"
            {...register('cpf')}
            value={cpf}
            onChange={(e) => setCpf(normalizeCpf(e.target.value))}
          />
        </InputContainer>
        <AlignedInputs.Two>
          <InputContainer>
            <label htmlFor="ddd">DDD *</label>
            {errors.ddd && (
              <span className="text-sm text-red-500">{errors.ddd.message}</span>
            )}
            <Input
              type="text"
              maxLength={2}
              minLength={2}
              {...register('ddd')}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="phone">Telefone *</label>
            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone.message}
              </span>
            )}
            <Input
              type="text"
              maxLength={10}
              minLength={9}
              {...register('phone')}
              value={phone}
              onChange={(e) => setPhone(normalizePhoneNumber(e.target.value))}
            />
          </InputContainer>
        </AlignedInputs.Two>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="email">E-mail *</label>
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
          <Input type="email" {...register('email')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="birthdate">Data de Nascimento *</label>
          {errors.birthdate && (
            <span className="text-sm text-red-500">
              {errors.birthdate.message}
            </span>
          )}
          <Input
            type="text"
            {...register('birthdate')}
            value={date}
            onChange={(e) => setDate(normalizeDate(e.target.value))}
          />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="password">Senha *</label>
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
          <Input type="password" {...register('password')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="passwordConfirm">Confirme a senha *</label>
          {errors.passwordConfirm && (
            <span className="text-sm text-red-500">
              {errors.passwordConfirm.message}
            </span>
          )}
          <Input type="password" {...register('passwordConfirm')} />
        </InputContainer>
      </AlignedInputs.Two>

      <div>
        <h2 className="text-lg">Endereço(s) *</h2>
        {errors.address && (
          <span className="text-sm text-red-500">{errors.address.message}</span>
        )}
        <div className="py-3 font-semibold">
          É necessário ter um endreço de cobrança e de entrega
        </div>
        <div className="grid grid-cols-aligned-itens-3 gap-1 py-2">
          {customer !== undefined &&
            customer.address.map((address, index) => (
              <InfoCard key={index}>
                <div className="flex justify-between">
                  <div className="font-bold">{address.alias}</div>
                  <X
                    className="h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                    onClick={() => removeAddress(address)}
                  />
                </div>
                <div>{`${address.street}, nº ${address.number}`}</div>
                <div>{`${address.neighborhood}, ${address.city} - ${address.country}`}</div>
                <div>
                  {address.streetPurpose !== undefined &&
                    address.streetPurpose.join(' - ')}
                </div>
              </InfoCard>
            ))}
        </div>
        <Button.Root
          type="button"
          className="border-blue-theme text-blue-theme hover:bg-blue-theme hover:text-white"
          onClick={openAddressModal}
        >
          <Button.Label label="Adicionar endereço" />
        </Button.Root>
      </div>

      <div>
        <h2 className="text-lg">Cartão(ões) *</h2>
        {errors.cards && (
          <span className="text-sm text-red-500">{errors.cards.message}</span>
        )}
        <div className="grid grid-cols-aligned-itens-3 gap-1 py-2">
          {customer !== undefined &&
            customer.cards.map((card, index) => (
              <InfoCard key={index}>
                <div className="flex justify-between">
                  <div className="flex items-center justify-center gap-2">
                    <Star
                      onClick={() => markCardAsMain(card)}
                      className={clsx({
                        'text-yellow-400': card.main === true,
                        'text-gray-500': card.main === false,
                        'h-6 w-6 cursor-pointer': true,
                      })}
                    ></Star>
                    {card.flag}
                  </div>
                  <X
                    className="h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                    onClick={() => removeCard(card)}
                  />
                </div>
                <div>{card.number}</div>
                <div>Titular: {card.name?.toLocaleUpperCase()}</div>
              </InfoCard>
            ))}
        </div>
        <Button.Root
          type="button"
          className="border-blue-theme text-blue-theme hover:bg-blue-theme hover:text-white"
          onClick={openCardModal}
        >
          <Button.Label label="Adicionar cartão" />
        </Button.Root>
      </div>

      <div className="mt-4 flex justify-end">
        <Button.Root
          type="submit"
          className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white "
        >
          <Button.Label label="Salvar" />
        </Button.Root>
      </div>

      {showAddressModal && (
        <Modal onHide={closeAddressModal} title="Adicionar Endereço">
          <AddressForm addAddress={addAddress} close={closeAddressModal} />
        </Modal>
      )}

      {showCardModal && (
        <Modal onHide={closeCardModal} title="Adicionar Cartão">
          <CardForm addCard={addCard} close={closeCardModal} />
        </Modal>
      )}
    </Form>
  )
}
