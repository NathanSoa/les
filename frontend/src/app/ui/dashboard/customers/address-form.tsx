'use client'

import Button from '@/app/ui/button'
import Input from '@/app/ui/input'
import InputContainer from '@/app/ui/input-container'
import AlignedInputs from '@/app/ui/aligned-inputs'
import Form from '@/app/ui/form'
import SelectInput from '@/app/ui/select-input'
import CheckBoxContainer from '@/app/ui/checkbox-container'

import { Address } from '@/app/domain/customer/entity'
import { streetTypes } from '@/app/domain/customer/address/street-types'
import { states } from '@/app/domain/customer/address/states'

import { AddressZodValidation } from '@/app/validation/address-zod-validation'

import { useNormalizer } from '@/app/hooks/useNormalizer'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface AddressFormProps {
  addAddress: (address: Address) => void
  close: () => void
}

export default function AddressForm({ addAddress, close }: AddressFormProps) {
  const [cep, setCep] = useState('')

  const { normalizeCep } = useNormalizer()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof AddressZodValidation>>({
    resolver: zodResolver(AddressZodValidation),
  })

  return (
    <Form>
      <AlignedInputs.Three>
        <InputContainer>
          <label htmlFor="streetType">Tipo de Logradouro *</label>
          {errors.streetType && (
            <span className="text-sm text-red-500">
              {errors.streetType.message}
            </span>
          )}
          <SelectInput
            options={streetTypes as readonly string[]}
            {...register('streetType')}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="street">Logradouro *</label>
          {errors.street && (
            <span className="text-sm text-red-500">
              {errors.street.message}
            </span>
          )}
          <Input type="text" {...register('street')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="number">Número *</label>
          {errors.number && (
            <span className="text-sm text-red-500">
              {errors.number.message}
            </span>
          )}
          <Input type="text" {...register('number')} />
        </InputContainer>
      </AlignedInputs.Three>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="neighborhood">Bairro *</label>
          {errors.neighborhood && (
            <span className="text-sm text-red-500">
              {errors.neighborhood.message}
            </span>
          )}
          <Input type="text" {...register('neighborhood')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="zipCode">Código Postal *</label>
          {errors.zipCode && (
            <span className="text-sm text-red-500">
              {errors.zipCode.message}
            </span>
          )}
          <Input
            type="text"
            {...register('zipCode')}
            value={cep}
            onChange={(e) => {
              setCep(normalizeCep(e.target.value))
            }}
          />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="city">Cidade *</label>
          {errors.city && (
            <span className="text-sm text-red-500">{errors.city.message}</span>
          )}
          <Input type="text" {...register('city')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="state">Estado *</label>
          {errors.state && (
            <span className="text-sm text-red-500">{errors.state.message}</span>
          )}
          <SelectInput
            options={states as readonly string[]}
            {...register('state')}
          />
        </InputContainer>
      </AlignedInputs.Two>

      <InputContainer>
        <label htmlFor="alias">Apelido *</label>
        {errors.alias && (
          <span className="text-sm text-red-500">{errors.alias.message}</span>
        )}
        <Input type="text" {...register('alias')} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="complement">Complemento</label>
        <Input type="text" {...register('complement')} />
      </InputContainer>

      <div className="flex flex-col gap-1">
        <label htmlFor="streetPurpose" className="block">
          Tipo de Endereço *
        </label>
        {errors.streetPurpose && (
          <span className="text-sm text-red-500">
            {errors.streetPurpose.message}
          </span>
        )}
        <div className="flex items-center gap-5 pt-3">
          <CheckBoxContainer>
            <label htmlFor="delivery" className="pr-1">
              Entrega
            </label>
            <Input
              type="checkbox"
              {...register('streetPurpose')}
              value={'Entrega'}
            />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <label htmlFor="billing" className="pr-1">
              Cobrança
            </label>
            <Input
              type="checkbox"
              {...register('streetPurpose')}
              value={'Cobrança'}
            />
          </CheckBoxContainer>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Button.Root
          type="button"
          className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          onClick={handleSubmit((data) => {
            addAddress(data)
            close()
          })}
        >
          <Button.Label label="Salvar" />
        </Button.Root>
      </div>
    </Form>
  )
}
