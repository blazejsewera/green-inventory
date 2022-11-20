import Pocketbase from 'pocketbase'
import { BACKEND_URL } from '../config'

export const CLIENT = new Pocketbase(BACKEND_URL)
export type RealtimeAction = 'create' | 'update' | 'delete'
