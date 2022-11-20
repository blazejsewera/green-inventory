import { Item, PartialItem } from '../../domain/Item'
import { CLIENT } from '../client'
import { ITEM } from './const'

export const createItem = (item: PartialItem) => {
  CLIENT.records.create(ITEM, item)
}

export const updateItem = (item: Item) => {
  CLIENT.records.update(ITEM, item.id, item)
}
