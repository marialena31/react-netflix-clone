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
import axios from 'axios'
import './Netflix.css'
import {useFetchData} from '../utils/hooks'

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
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)
    const apiKey = '2a90cf56ad9a606649a02486152eacb1'
    const lang = 'fr-fr'
    const API_URL = 'https://api.themoviedb.org/3/'
    const endpoint = `movie/${defaultMovieId}?`
    const {data: headerMovie, error, status, execute} = useFetchData()

  React.useEffect(() => {
    execute(clientApi(`${type}/${defaultMovieId}`))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    if (status === 'error') {
        // sera catcher par ErrorBoundary
        throw new Error(error.message)
    }
    if(error) {
        return (
            <Alert severity="error">
                <AlertTitle>Une erreur est survenue</AlertTitle>
                Detail : {error.message}
            </Alert>
        )
    } else {
        return (
            <div>
                <NetflixAppBar/>
                <NetflixHeader movie={headerMovie?.data} type={type}/>
                <NetflixRow wideImage={false} title="Films Netflix"/>
                <NetflixRow wideImage={true} title="Série Netflix"/>
                {status === 'error' ? <div className="myClasses.alert">
                    <Alert severity="error">Error message</Alert>
                </div> : null}
                {status === 'fetching' ? <div className="myClasses.progress">
                    <CircularProgress/>
                </div> : null}
                <NetFlixFooter/>
            </div>
        )
    }
}
export {NetflixApp}
