import { useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { NavbarButton } from './NavbarLink'

export function DarkmodeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <NavbarButton
      onClick={() => toggleColorScheme()}
      icon={colorScheme === 'dark' ? IconSun : IconMoonStars}
      label={colorScheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    />
  )
}
