import { ColorSchemeProvider } from '@mantine/core'
import { Router } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { snap } from '../../util/test/snapshot'
import { AppNavbar } from './AppNavbar'

describe('AppNavbar', () => {
  it('renders properly', () => {
    const s = snap(
      <HashRouter>
        <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
          <AppNavbar />
        </ColorSchemeProvider>
      </HashRouter>,
    )
    expect(s).toMatchSnapshot()
  })
})
