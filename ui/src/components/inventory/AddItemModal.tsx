import { Button, Modal, NativeSelect, Select, Stack, TextInput } from '@mantine/core'
import { useState } from 'react'
import { createItem } from '../../controller/item/change'
import { useStore } from '../../model/store'

export const AddItemModal: FC = () => {
  const [state, setState] = useState({})
  const open = useStore(state => state.addItemModalOpened)
  const setOpen = useStore(state => state.setAddItemModalOpened)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget
    const property = id.substring(2)
    if (property === 'quantity') {
      return setState({ ...state, [property]: Number(value) })
    }
    setState({ ...state, [property]: value })
  }

  const handleSelectChange = (value: string | null) => {
    setState({ ...state, state: value })
  }

  const submit = () => {
    createItem(state)
    setOpen(false)
  }

  return (
    <Modal opened={open} onClose={() => setOpen(false)} title="Add item">
      <Stack>
        <TextInput onChange={handleChange} id="m-name" placeholder="Name" label="Product name" />
        <TextInput onChange={handleChange} id="m-category" placeholder="Category" label="Category" />
        <TextInput onChange={handleChange} id="m-quantity" placeholder="Quantity" label="Quantity" />
        <TextInput onChange={handleChange} id="m-purpose" placeholder="Purpose" label="Purpose" />
        <TextInput
          onChange={handleChange}
          id="m-internalInventoryNo"
          placeholder="######"
          label="Internal Inventory No"
        />
        <TextInput onChange={handleChange} id="m-producer" placeholder="Producer" label="Producer" />
        <TextInput onChange={handleChange} id="m-producerCode" placeholder="######" label="Producer Code" />
        <TextInput onChange={handleChange} id="m-repairUrl" placeholder="http://" label="Repair URL" />
        <TextInput onChange={handleChange} id="m-tradeInUrl" placeholder="http://" label="Trade-in URL" />
        <Select
          label="Status"
          onChange={handleSelectChange}
          id="m-status"
          placeholder="status"
          data={[
            { label: 'onStock', value: 'onStock' },
            { label: 'distributed', value: 'distributed' },
            { label: 'inRepair', value: 'inRepair' },
          ]}
        />
        <Button type="submit" onClick={submit}>
          Add
        </Button>
      </Stack>
    </Modal>
  )
}
