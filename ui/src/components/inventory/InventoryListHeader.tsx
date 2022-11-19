import { Center, createStyles, Group, UnstyledButton, Text } from '@mantine/core'
import { IconChevronDown, IconChevronUp, IconSelector } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}))

interface InventoryListHeaderProps {
  children: React.ReactNode
  reversed: boolean
  sorted: boolean
  onSort(): void
}

export const InventoryListHeader: FC<InventoryListHeaderProps> = ({ children, reversed, sorted, onSort }) => {
  const { classes } = useStyles()
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  )
}
