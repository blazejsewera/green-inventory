import { useState } from 'react'
import { Table, ScrollArea, Text, TextInput, createStyles, Button, ActionIcon } from '@mantine/core'
import { keys } from '@mantine/utils'
import { IconDotsVertical, IconSearch } from '@tabler/icons'
import { InventoryListHeader } from './InventoryListHeader'
import { Item } from '../../domain/Item'
import { useEffect } from 'react'

interface InventoryListProps {
  data: Record<string, Item>
}

function filterData(data: Item[], search: string) {
  const query = search.toLowerCase().trim()
  return data.filter(item => keys(data[0]).some(key => item[key]?.toString().toLowerCase().includes(query)))
}

function sortData(data: Item[], payload: { sortBy: keyof Item | null; reversed: boolean; search: string }) {
  const { sortBy } = payload

  if (!sortBy) {
    return filterData(data, payload.search)
  }

  return filterData(
    [...data].sort((a, b) => {
      const left: string | number = a[sortBy] ?? 0
      const right: string | number = b[sortBy] ?? 1
      if (typeof left === 'number' && typeof right === 'number') {
        if (payload.reversed) return left - right
        return right - left
      }

      const leftString = left.toString()
      const rightString = right.toString()
      if (payload.reversed) {
        return rightString.localeCompare(leftString)
      }

      return leftString.localeCompare(rightString)
    }),
    payload.search,
  )
}

const useStyles = createStyles(theme => ({
  th: {
    padding: '0 !important',
  },
}))

export const InventoryList: FC<InventoryListProps> = props => {
  const data = Object.values(props.data)
  const [search, setSearch] = useState('')
  const [sortedData, setSortedData] = useState(data)
  const [sortBy, setSortBy] = useState<keyof Item | null>(null)
  const [reverseSortDirection, setReverseSortDirection] = useState(false)

  useEffect(() => {
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search }))
  })

  const setSorting = (field: keyof Item) => {
    const reversed = field === sortBy ? !reverseSortDirection : false
    setReverseSortDirection(reversed)
    setSortBy(field)
    setSortedData(sortData(data, { sortBy: field, reversed, search }))
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setSearch(value)
    setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }))
  }

  const rows = sortedData.map(
    ({ id, name, category, quantity, purpose, internalInventoryNo, producer, producerCode }) => (
      <tr key={id}>
        <td>{name}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{purpose}</td>
        <td>{internalInventoryNo}</td>
        <td>{producer}</td>
        <td>{producerCode}</td>
        <td>
          <ActionIcon variant="default">
            <IconDotsVertical size={16} />
          </ActionIcon>
        </td>
      </tr>
    ),
  )

  const Th = (props: { colName: keyof Item; display?: string }) => (
    <InventoryListHeader
      sorted={sortBy === props.colName}
      reversed={reverseSortDirection}
      onSort={() => setSorting(props.colName)}
    >
      {props.display ?? props.colName[0].toLocaleUpperCase() + props.colName.substring(1)}
    </InventoryListHeader>
  )

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size={14} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table horizontalSpacing="md" verticalSpacing="xs" sx={{ minWidth: 700 }}>
        <thead>
          <tr>
            <Th colName="name" />
            <Th colName="category" />
            <Th colName="quantity" />
            <Th colName="purpose" />
            <Th colName="internalInventoryNo" display="Inventory No" />
            <Th colName="producer" />
            <Th colName="producerCode" display="Producer Code" />
            <th className={useStyles().classes.th}>
              <Text weight={500} size="sm">
                Actions
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={8}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  )
}
