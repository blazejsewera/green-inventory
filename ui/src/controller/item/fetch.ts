import { Item } from '../../domain/Item'
import { Record } from 'pocketbase'
import { CLIENT, RealtimeAction } from '../client'
import { ITEM } from './const'

const fromItemData = (itemData: Record): Item => {
  return Object.keys(itemData).reduce((acc, curr) => {
    return curr[0] === '@' ? acc : { ...acc, [curr]: itemData[curr] }
  }, {}) as unknown as Item
}

export const fetchItems = (setItems: (items: Item[]) => void) => {
  CLIENT.records.getList(ITEM).then(({ items: itemsData }) => {
    setItems(itemsData.map(fromItemData))
  })
}

export const streamItems = (
  addItem: (item: Item) => void,
  updateItem: (item: Item) => void,
  deleteItem: (item: Item) => void,
) => {
  CLIENT.realtime.subscribe(ITEM, ({ action, record }) => {
    const item = fromItemData(record)
    switch (action as RealtimeAction) {
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
