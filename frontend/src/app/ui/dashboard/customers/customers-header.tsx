'use client'

import { UserPlus } from '@phosphor-icons/react'

import { useModal } from '@/app/hooks/useModal'

import Breadcrumb from '@/app/ui/breadcrumb'
import Button from '@/app/ui/button'
import Modal from '@/app/ui/modal'
import Form from '@/app/ui/form'

export default function CustomersHeader() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Breadcrumb pageName={'Customers'} homePage="/dashboard" />
      <div className="flex max-w-7xl justify-between">
        <h1 className="pb-6 pt-2 text-4xl font-bold">Customers</h1>
        <Button.Root
          className="m-2 flex items-center justify-center gap-2 border-blue-theme px-4 py-1 text-blue-theme hover:bg-blue-800 hover:text-white"
          onClick={() => openModal()}
        >
          <Button.Icon icon={<UserPlus size={32} />} />
          <Button.Label label="Create customer" />
        </Button.Root>
      </div>
      {isOpen && (
        <Modal title="MyModal" onHide={() => closeModal()}>
          <Form>Hello Modal</Form>
        </Modal>
      )}
    </>
  )
}
