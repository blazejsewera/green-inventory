import { Center, Stack, Title } from '@mantine/core'
import { InventoryList } from '../components/inventory/InventoryList'

export const DebugSewera = () => {
  const data = {
    '1': {
      id: '1',
      name: 'Monitor 1',
      category: 'IT',
      quantity: 100,
      purpose: 'Graphic design',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    '2': {
      id: '2',
      name: 'Laptop 2',
      category: 'IT',
      quantity: 50,
      purpose: 'Programming',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    '3': {
      id: '3',
      name: 'Printer 3',
      category: 'Production',
      quantity: 2,
      purpose: 'Graphic design',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    '4': {
      id: '4',
      name: 'Mouse 4',
      category: 'Utilities',
      quantity: 10,
      purpose: 'Gaming',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
      created: '2022-11-20 07:12:04.780',
      repairUrl: 'https://www.dell.com/en-us/shop/services/cp/fixyourpc',
      tradeInUrl: 'https://tradein.dell.com/',
      updated: '2022-11-20 07:12:04.780',
    },
  }
  return (
    <>
      <Title>Items on stonk</Title>
      <InventoryList data={data} />
    </>
  )
}
