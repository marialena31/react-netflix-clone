import {NetflixApp} from 'components/NetflixApp'
import { ThemeProvider} from '@mui/styles'
import NetFlixApp from './components/NetflixApp'

const theme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#111',
    },
    secondary: {
      main: '#000',
    },
  },
  shadows: 'none'
}

function App() {
  return (
      <ThemeProvider theme={theme}>
        <NetflixApp />
      </ThemeProvider>
  )
}

export {App}
