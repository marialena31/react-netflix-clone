import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import axios from 'axios'
import './Netflix.css'

const NetflixHeader = ({movie}) => {
    const imageUrl = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    const banner = {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        color: 'white',
        objectFit: 'contain',
        height: '448px',
    }

    if(!movie) {
        return <></>
    } else {
        return (

            <header style={banner}>
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title ?? '...'}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button banner__buttonplay">Lecture</button>
                        <button className="banner__button banner__buttonInfo">
                            Ajouter à ma liste
                        </button>
                    </div>
                    <h1 className="synopsis">
                        {movie?.overview ?? '...'}
                    </h1>
                </div>
                <div className="banner--fadeBottom"></div>
            </header>
        )
    }
}

const NetflixApp = () => {
const [headerMovie, setHeaderMovie] = React.useState(null)
    const defaultMovieId = '557'
   const apiKey = '2a90cf56ad9a606649a02486152eacb1'
   const lang = 'fr-fr'

    React.useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${defaultMovieId}?api_key=${apiKey}&language=${lang}`
        axios
          .get(url)
          .then(response => setHeaderMovie(response.data))
          .catch(error => console.error(error))
    },[])

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie}/>
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
