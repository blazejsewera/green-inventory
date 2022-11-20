import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Item } from '../domain/Item'
import { deleteFromRecord, recordFromIdArray } from '../util/data/records'

export type State = {
  items: Record<string, Item>
  addOrUpdateItem: (item: Item) => void
  deleteItem: (item: Item) => void
  setItems: (items: Item[]) => void
  colorScheme: 'light' | 'dark'
  darkModeToggle: (colorScheme?: 'light' | 'dark') => void

  addItemModalOpened: boolean
  setAddItemModalOpened: (s: boolean) => void
}

export type SetState = (
  partial: State | Partial<State> | ((state: State) => State | Partial<State>),
  replace?: boolean | undefined,
) => void
const store = (set: SetState): State => ({
  items: {},
  addOrUpdateItem: item => set(prev => ({ items: { ...prev.items, [item.id]: item } })),
  deleteItem: item => set(prev => ({ items: deleteFromRecord(prev.items, item) })),
  setItems: items => set({ items: recordFromIdArray(items) }),
  colorScheme: 'dark',
  darkModeToggle: (colorScheme?: 'light' | 'dark') =>
    set(prev => {
      switch (colorScheme) {
        case 'dark':
          return { colorScheme: 'dark' }
        case 'light':
          return { colorScheme: 'light' }
        default:
          return prev.colorScheme === 'dark' ? { colorScheme: 'light' } : { colorScheme: 'dark' }
          break
      }
    }),
  addItemModalOpened: false,
  setAddItemModalOpened: s => set({ addItemModalOpened: s }),
})

const storeWithMiddleware = devtools(store)

export const useStore = create<State>()(storeWithMiddleware)

export type UseStore = typeof useStore
export type GetState = typeof useStore.getState
export type Subscribe = typeof useStore.subscribe
export type Destroy = typeof useStore.destroy
