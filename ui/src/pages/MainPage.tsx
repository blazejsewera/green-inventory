import { ColorSchemeProvider, MantineProvider, Stack } from '@mantine/core'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppNavbar } from '../components/navbar/AppNavbar'
import { fetchItems, streamItems } from '../controller/item/fetch'
import { useStore } from '../model/store'

const connectControllerToStore = () => {
  const { setItems, addOrUpdateItem, deleteItem } = useStore.getState()
  fetchItems(setItems)
  streamItems(addOrUpdateItem, addOrUpdateItem, deleteItem)
}

export const MainPage = () => {
  const colorScheme = useStore(state => state.colorScheme)
  const darkModeToggle = useStore(state => state.darkModeToggle)

  const checkForDarkModePreference = () => {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? darkModeToggle('dark') : darkModeToggle('light')
  }

  useEffect(() => {
    checkForDarkModePreference()
    connectControllerToStore()
  }, [])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={darkModeToggle}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppNavbar />
        <div style={{ marginLeft: '80px' }}>
          <Stack px={30} pt={10}>
            <Outlet />
          </Stack>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
