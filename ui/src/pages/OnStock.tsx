import { Title } from '@mantine/core'
import { AddButton } from '../components/inventory/AddButton'
import { AddItemModal } from '../components/inventory/AddItemModal'
import { InventoryList } from '../components/inventory/InventoryList'
import { useStore } from '../model/store'

export const OnStock: FC = () => {
  const data = useStore(store => store.items)
  const setModalOpen = useStore(store => store.setAddItemModalOpened)
  console.log(data)
  return (
    <>
      <Title>Items on stock</Title>
      <InventoryList data={data} />
      <AddItemModal />
      <AddButton onClick={() => setModalOpen(true)} />
    </>
  )
}
