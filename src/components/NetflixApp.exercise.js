import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {NetflixHeader} from './NetflixHeader'
import {getRandomType, getRandomId} from '../utils/helper'
import {clientApi} from '../utils/clientApi'
import {Alert, AlertTitle} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import {makeStyles} from '@mui/styles'
import './Netflix.css'

const useStyles = makeStyles({
    alert: {
        width: '50%',
         margin : 'auto',
         marginBotton:'50px'
    },
    progress: {
        marginLeft : '30px',
    },
});

const NetflixApp = () => {
    const myClasses = useStyles();
  const [headerMovie, setHeaderMovie] = React.useState()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
    const [status, setStatus] = React.useState('idle')


    const sleep = t => new Promise(resolve => setTimeout(resolve, t))

  React.useEffect(() => {
      setStatus('fetching')

      const clientApi = async endpoint => {
          const page = 1
          const startChar = endpoint.includes('?') ? `&` : `?`
          await sleep(2000)
          const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
          return axios.get(`${API_URL}/${endpoint}${keyLang}`)
      }
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => {
        setHeaderMovie(response)
          sleep(2000)
          setStatus('done')
      })
      .catch(error => {
          console.error(error)
          setStatus('error')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
        {status === 'error' ? <div className="myClasses.alert">
            <Alert severity="error">Error message</Alert>
        </div> : null}
        {status === 'fetching' ? <div className="myClasses.progress">
            <CircularProgress />
        </div> : null}
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
