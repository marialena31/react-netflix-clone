/* eslint-disable no-unused-vars */
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import './Netflix.css'

const NetflixAppBar = () => {
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })

  React.useEffect(() => {
    const onScroll = e => {
      if (e.target.documentElement.scrollTop >= 100) {
        setAppBarStyle({
          background: '#111',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      } else {
        setAppBarStyle({
          background: 'transparent',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const margin10 = {margin: 10}

  return <>
    <AppBar style={appBarStyle}>
      <Toolbar>
        <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
        <a href="/">
          <Typography style={margin10} variant="h6">
            Acceuil
          </Typography>
        </a>
        <a href="/series">
          <Typography style={margin10} variant="h6">
            Serie
          </Typography>
        </a>
        <a href="/movies">
          <Typography style={margin10} variant="h6">
            Films
          </Typography>
        </a>
        <a href="/news">
          <Typography style={margin10} variant="h6">
            Nouveautés les plus regardées
          </Typography>
        </a>
        <a href="/list">
          <Typography style={margin10} variant="h6">
            Ma liste
          </Typography>
        </a>
        <img
            style={{marginLeft: 'auto'}}
            className="nav__avatar"
            src="/images/netflix-avatar.png"
            alt=""
        />
      </Toolbar>
    </AppBar></>
}
const NetflixHeader = () => {
  return <>
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">La casa de papel</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">
            Lecture
          </button>
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
        <h1 className="synopsis">
          Le Professeur recrute une jeune braqueuse et sept autres criminels
          en vue d'un cambriolage grandiose ciblant la Maison royale de la
          Monnaie d'Espagne.
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  </>
}
const NetFlixFooter = () => {
  return <>
    <footer className="footer">2021 - Netflix Clone</footer>
  </>
}
// 🐶 NetflixRow prendra 2 props : 'title' et 'wideImage'
// 'title' permettra d'afficher le titre d'une ligne : exemple 'Films Netflix'
// 'wideImage' est un boolean qui permet d'afficher un film au format 'large' ou 'poster'
// pour le moment si 'wideImage' = true, on affiche 'images/sample-poster.jpg' sinon 'images/sample.jpg'
const NetflixRow = ({title, wideImage}) => {
  // 🐶 déplace ici tout le code des lignes de films ici
  return <>
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        <img
            className="row__poster row__posterLarge"
            src={wideImage ? "images/sample-poster.jpg" : "images/sample.jpg"}
            alt=""
        />
        <img
            className="row__poster row__posterLarge"
            src={wideImage ? "images/sample-poster1.jpg" : "images/sample1.jpg"}
            alt=""
        />
        <img
            className="row__poster row__posterLarge"
            src={wideImage ? "images/sample-poster.jpg" : "images/sample.jpg"}
            alt=""
        />
        <img
            className="row__poster row__posterLarge"
            src={wideImage ? "images/sample-poster1.jpg" : "images/sample1.jpg"}
        />
      </div>
    </div>
  </>
}

// 🐶 Dans les prochaine section, ces composants seront déplcés dans des fichier
// pour plus de lisibilité

const NetflixApp = () => {

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader />
      <NetflixRow wideImage={false} title='Films Netflix' />
      <NetflixRow wideImage={true} title='Séries Netflix' />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
