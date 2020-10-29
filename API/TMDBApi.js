const API_TOKEN = '3e159f3c2324dea4629ca3a72c44ddc5'

export function getFilmsFromApiWithSearchedText (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

/**
 * permet de recuperer l'addresse de l'image d'un film
 * le w300 montre qu'on a une image 300px de largeur
 */
export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}


// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}