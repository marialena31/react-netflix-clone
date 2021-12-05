import {NetflixApp} from 'components/NetflixApp'
import {createTheme} from '@mui/material/styles'
import {ThemeProvider} from '@mui/styles'
import {NetflixAppBar} from 'components/NetflixAppBar'
import {ErrorBoundary} from 'react-error-boundary'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#E50914',
    },
  },
})

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div>
      <NetflixAppBar />
      <div
        role="alert"
        style={{
          height: '100%',
          textAlign: 'center',
          margin: '100px 300px',
          color: '#fff',
        }}
      >
        <h1 style={{fontSize: '2.5em'}}>Vous cherchez votre chemin ?</h1>
        <pre style={{color: 'red', fontSize: '1em'}}>
          Erreur : {error.message}
        </pre>

        <div className="banner__buttons">
          <button
            className="banner__button banner__buttonplay"
            onClick={resetErrorBoundary}
          >
            Accueil
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <NetflixApp />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export {App}