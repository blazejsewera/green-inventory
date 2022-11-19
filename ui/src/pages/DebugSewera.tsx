import { InventoryList } from '../components/inventory/InventoryList'

export const DebugSewera = () => {
  const data = [
    {
      id: '1',
      name: 'Monitor 1',
      category: 'IT',
      quantity: 100,
      purpose: 'Graphic design',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    {
      id: '2',
      name: 'Laptop 2',
      category: 'IT',
      quantity: 50,
      purpose: 'Programming',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    {
      id: '3',
      name: 'Printer 3',
      category: 'Production',
      quantity: 2,
      purpose: 'Graphic design',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
    {
      id: '4',
      name: 'Mouse 4',
      category: 'Utilities',
      quantity: 10,
      purpose: 'Gaming',
      internalInventoryNo: '01234',
      producer: 'Dell',
      producerCode: 'D01234',
    },
  ]
  return <InventoryList data={data} />
}
