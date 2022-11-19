import { ColorSchemeProvider } from '@mantine/core'
import { act } from 'react-test-renderer'
import { snap } from '../../util/test/snapshot'
import { AppNavbar } from './AppNavbar'

describe('AppNavbar', () => {
  it('renders properly', () => {
    const s = snap(
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <AppNavbar />
      </ColorSchemeProvider>,
    )
    expect(s).toMatchSnapshot()
  })
})
