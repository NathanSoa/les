'use client'

import Button from '@/app/ui/common/button'
import Input from '@/app/ui/common/input'
import InputContainer from '@/app/ui/common/input-container'
import AlignedInputs from '@/app/ui/common/aligned-inputs'
import Form from '@/app/ui/common/form'
import SelectInput from '@/app/ui/common/select-input'

import { useCard } from '@/app/hooks/useCard'
import { useNormalizer } from '@/app/hooks/useNormalizer'

import { Card } from '@/app/domain/customer/entity'

import { CardZodValidation } from '@/app/validation/card-zod-validation'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface CardFormProps {
  addCard: (card: Omit<Card, 'main'>) => void
  close: () => void
}

export default function CardForm({ addCard, close }: CardFormProps) {
  const [cardNumber, setCardNumber] = useState('')

  const { flags } = useCard()
  const { normalizeCardNumber } = useNormalizer()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof CardZodValidation>>({
    resolver: zodResolver(CardZodValidation),
  })

  const stringFlags = flags.map((flag) => flag.name)

  return (
    <Form>
      <InputContainer>
        <label htmlFor="name">Nome do titular *</label>
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
        <Input type="text" {...register('name')} />
      </InputContainer>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="number">Número *</label>
          {errors.number && (
            <span className="text-sm text-red-500">
              {errors.number.message}
            </span>
          )}
          <Input
            type="text"
            {...register('number')}
            value={cardNumber}
            maxLength={16}
            onChange={(e) => setCardNumber(normalizeCardNumber(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="securityCode">Código de segurança *</label>
          {errors.securityCode && (
            <span className="text-sm text-red-500">
              {errors.securityCode.message}
            </span>
          )}
          <Input type="text" {...register('securityCode')} maxLength={4} />
        </InputContainer>
      </AlignedInputs.Two>

      <AlignedInputs.Two>
        <InputContainer>
          <label htmlFor="type">Tipo *</label>
          {errors.type && (
            <span className="text-sm text-red-500">{errors.type.message}</span>
          )}
          <SelectInput options={['Crédito', 'Débito']} {...register('type')} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="flag">Bandeira *</label>
          {errors.flag && (
            <span className="text-sm text-red-500">{errors.flag.message}</span>
          )}
          <SelectInput options={stringFlags} {...register('flag')} />
        </InputContainer>
      </AlignedInputs.Two>

      <div className="mt-4 flex justify-end">
        <Button.Root
          type="button"
          className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          onClick={handleSubmit((data) => {
            addCard(data)
            close()
          })}
        >
          <Button.Label label="Salvar" />
        </Button.Root>
      </div>
    </Form>
  )
}
