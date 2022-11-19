import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Note } from '../domain/Note'
import { deleteFromRecord, recordFromIdArray } from '../util/data/records'

export type State = {
  notes: Record<string, Note>
  addOrUpdateNote: (note: Note) => void
  deleteNote: (note: Note) => void
  setNotes: (notes: Note[]) => void
  colorScheme: 'light' | 'dark'
  darkModeToggle: (colorScheme?: 'light' | 'dark') => void
}

export type SetState = (
  partial: State | Partial<State> | ((state: State) => State | Partial<State>),
  replace?: boolean | undefined,
) => void
const store = (set: SetState): State => ({
  notes: {},
  addOrUpdateNote: note => set(prev => ({ notes: { ...prev.notes, [note.id]: note } })),
  deleteNote: note => set(prev => ({ notes: deleteFromRecord(prev.notes, note) })),
  setNotes: notes => set({ notes: recordFromIdArray(notes) }),
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
})

const storeWithMiddleware = devtools(store)

export const useStore = create<State>()(storeWithMiddleware)

export type UseStore = typeof useStore
export type GetState = typeof useStore.getState
export type Subscribe = typeof useStore.subscribe
export type Destroy = typeof useStore.destroy
