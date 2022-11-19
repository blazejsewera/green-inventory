import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useEffect } from 'react'
import { DarkmodeToggle } from '../components/DarkmodeToggle'
import { NavbarMinimal } from '../components/NavbarMinimal'
import { useStore } from '../data/store'
export const DebugKoccov = () => {
  const darkMode = useStore(state => state.darkMode)
  const darkModeToggle = useStore(state => state.darkModeToggle)
  const darkModeOn = useStore(state => state.darkModeOn)
  const darkModeOff = useStore(state => state.darkModeOff)

  const checkForDarkModePreference = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? darkModeOn() : darkModeOff()
  }

  useEffect(() => {
    checkForDarkModePreference()
  }, [])

  type ColorScheme = 'dark' | 'light'
  const toggleColorScheme = (colorScheme?: ColorScheme) => {
    switch (colorScheme) {
      case 'dark':
        darkModeOn()
        break
      case 'light':
        darkModeOff()
        break
      default:
        darkModeToggle()
        break
    }
  }

  const getColorScheme = (): ColorScheme => (darkMode ? 'dark' : 'light')

  return (
    <ColorSchemeProvider colorScheme={getColorScheme()} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme: getColorScheme() }} withGlobalStyles withNormalizeCSS>
        <NavbarMinimal />
        <DarkmodeToggle />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
