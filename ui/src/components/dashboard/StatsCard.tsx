import { Paper, Stack, Text } from '@mantine/core'

export interface StatsRingProps {
  label: string
  demanded: number
  alertLvl: number
  color: string
}

export function StatsCard(props: StatsRingProps) {
  const isOverDemand = props.demanded >= props.alertLvl ? 'red' : 'scheme'
  return (
    <Paper withBorder radius="md" p="xl" key={props.label}>
      <Stack>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          {props.label}
        </Text>
        <Text weight={700} size="xl" color={isOverDemand}>
          {props.demanded}
        </Text>
      </Stack>
    </Paper>
  )
}
