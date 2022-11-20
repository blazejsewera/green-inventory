export type Status = 'onStock' | 'distributed' | 'inRepair' | 'tradedIn' | 'donated' | 'gaveAway' | 'scrapped'

export type Item = {
  id: string
  name?: string
  category?: string
  quantity?: number
  purpose?: string
  internalInventoryNo?: string
  producer?: string
  producerCode?: string
  repairUrl?: string
  tradeInUrl?: string
  status?: Status
}

export type PartialItem = Partial<Item>
