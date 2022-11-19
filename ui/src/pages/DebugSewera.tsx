import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useEffect } from 'react'
import { AppNavbar } from '../components/navbar/AppNavbar'
import { useStore } from '../model/store'
export const DebugSewera = () => {
  const colorScheme = useStore(state => state.colorScheme)
  const darkModeToggle = useStore(state => state.darkModeToggle)

  const checkForDarkModePreference = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? darkModeToggle('dark') : darkModeToggle('light')
  }

  useEffect(() => {
    checkForDarkModePreference()
  }, [])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={darkModeToggle}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppNavbar />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
