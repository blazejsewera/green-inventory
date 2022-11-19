import { Item } from '../domain/Item'
import Pocketbase, { Record } from 'pocketbase'
import { BACKEND_URL } from '../config'

const client = new Pocketbase(BACKEND_URL)

const fromItemData = (itemData: Record): Item => {
  const { id, name, category, quantity, purpose, internalInventoryNo, producer, producerCode } = itemData
  return { id, name, category, quantity, purpose, internalInventoryNo, producer, producerCode }
}

export const fetchItems = (setItems: (items: Item[]) => void) => {
  client.records.getList('items').then(({ items: itemsData }) => {
    setItems(itemsData.map(fromItemData))
  })
}

type Action = 'create' | 'update' | 'delete'

export const streamItems = (
  addItem: (item: Item) => void,
  updateItem: (item: Item) => void,
  deleteItem: (item: Item) => void,
) => {
  client.realtime.subscribe('items', ({ action, record }) => {
    const item = fromItemData(record)
    switch (action as Action) {
      case 'create':
        addItem(item)
        break
      case 'update':
        updateItem(item)
        break
      case 'delete':
        deleteItem(item)
    }
  })
}
