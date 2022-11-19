import { useState } from 'react'
import { Navbar, Center, Stack } from '@mantine/core'
import {
  IconHome2,
  IconGauge,
  IconUser,
  IconSettings,
  IconLogout,
  IconBox,
  IconArrowsExchange,
  IconRecycle,
} from '@tabler/icons'
import { MantineLogo } from '@mantine/ds'
import { NavbarLink } from './NavbarLink'
import { DarkmodeToggle } from './DarkmodeToggle'

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconBox, label: 'On stock' },
  { icon: IconArrowsExchange, label: 'Distributed' },
  { icon: IconRecycle, label: 'Repairs' },
  { icon: IconUser, label: 'Account' },
  { icon: IconSettings, label: 'Settings' },
]

export const AppNavbar = () => {
  const [active, setActive] = useState(2)

  const links = mockdata.map((link, index) => (
    <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
  ))

  return (
    <Navbar fixed height="100%" width={{ base: 80 }} p="md">
      <Center>
        <MantineLogo type="mark" size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <DarkmodeToggle />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}
