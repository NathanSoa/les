import CustomersTableView from '@/app/ui/dashboard/customers/table/view'

const dbCustomers = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Jane Doe',
    email: 'ads@fds',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Jane Doeasdasdasdasdasdadadasdasdasdasdasda',
    email: 'ads@fdsasddddddddddddddddddddddddddddddddasd',
    phone: '+1 123 456 7890',
  },
]

const getCustomer = async (): Promise<typeof dbCustomers> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dbCustomers)
    }, 4000)
  })
}

export default async function CustomersTable() {
  const costumers = await getCustomer()

  return <CustomersTableView customers={costumers} />
}
