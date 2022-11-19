import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { NavbarLink } from './NavbarLink'

export function DarkmodeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <NavbarLink
      onClick={() => toggleColorScheme()}
      icon={colorScheme === 'dark' ? IconSun : IconMoonStars}
      label={colorScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    />
  )
}
