import { Container, Grid } from '@mantine/core'
import { StatsCard, StatsRingProps } from './StatsCard'

export function DashboardGrid() {
  const statsData: StatsRingProps = {
    label: 'Demanded items',
    demanded: 50,
    alertLvl: 51,
    color: 'red',
  }

  return (
    <Container my="xl">
      <Grid columns={2}>
        <Grid.Col>
          <StatsCard {...statsData} />
        </Grid.Col>
        <Grid.Col span={2}>
          <StatsCard {...statsData} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
