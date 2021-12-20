import React from 'react'

// 🐶 créé une structure HTML simple represantant le site de Netflix
// il y aura :
// - une barre de menu
// - un header
// - un zone de pochette de film (format large)
// - un zone de pochette de film (format poster)
// - un footer

// 👨‍✈️ Hugo le chef de projet te détaillera chaque bloque.
const NetflixApp = () => {
  return (
    <div>
      {/* 👨‍✈️ Barre de menu :  créé la barre de menu en créant 7 élements (2 images logo et 5 liens) 
      La premiere image sera le logo NetFlix, la derniere image le boutton du compte.*/}
      <div>
        {/* 🐶 créé une <img> avec la source "images/netflix-logo.png" et 'height' de 20px   */}
          <img src='images/netflix-logo.png' height='20px' alt='logo'/>
        {/* 🐶 créé  5 liens <a> : Acceuil, Séries, Films, Nouveautés, Ma liste*/}
          <a>Accueil</a>
          <a>Séries</a>
          <a>Films</a>
          <a>Nouveautés</a>
          <a>Ma liste</a>
        {/* 🐶 créé une <img> avec la source "images/netflix-avatar.png" et 'height' de 20px   */}
          <img src='images/netflix-avatar.png' height='20px' alt='avatar'/>
      </div>

      {/* 👨‍✈️ Header : Contenant un titre, 2 bouttons, zone description */}
      <header>
        <div>
          {/* 🐶 Créé un titre h1 : La casa de papel */}
            <h1>La Casa de Papel</h1>
          <div>
            {/* 🐶 Créé un button : Lecture */}
              <input type="button" value="Lecture"/>
            {/* 🐶 Créé un button : Ajouter à ma liste */}
              <input type="button" value="Ajouter à ma liste"/>
          </div>
            <h1>Le Professeur recrute une jeune braqueuse et sept autres criminels en vue d'un cambriolage grandiose ciblant la Maison royale de la Monnaie d'Espagne.</h1>
          {/* 🐶 Créé un titre h1 contenant le texte : Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne. */}
        </div>
      </header>

      {/* 👨‍✈️ Zone ligne de films format large */}
      <div>
        {/* 🐶 Créé un titre h2 : Films Netflix */}
          <h2>Films Netflix</h2>
        <div>
          {/* 🐶 Créé 4 <img> height à 250 : Alterne avec 'images/sample.jpg' et images/sample1.jpg  */}
            <img src='images/sample.jpg' height='250px' alt='avatar'/>
            <img src='images/sample1.jpg' height='250px' alt='avatar'/>
            <img src='images/sample.jpg' height='250px' alt='avatar'/>
            <img src='images/sample1.jpg' height='250px' alt='avatar'/>
        </div>
      </div>

      {/* 👨‍✈️ Zone ligne de films format poster */}
      <div>
        {/* 🐶 Créé un titre h2 : Série Netflix */}
          <h2>Séries Netflix</h2>
        <div>
          {/* 🐶 Créé 4 <img> height à 300 : Alterne avec 'images/sample-poster.jpg' et images/sample-poster1.jpg  */}
            <img src='images/sample-poster.jpg' height='300px' alt='avatar'/>
            <img src='images/sample-poster1.jpg' height='300px' alt='avatar'/>
            <img src='images/sample-poster.jpg' height='300px' alt='avatar'/>
            <img src='images/sample-poster1.jpg' height='300px' alt='avatar'/>
        </div>
      </div>

      <footer>2021 - Netflix Clone</footer>
    </div>
  )
}
export {NetflixApp}
