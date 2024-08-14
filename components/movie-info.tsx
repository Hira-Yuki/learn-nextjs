import styles from '@styles/movie-info.module.css'
import { API_URL } from "app/(home)/page"

export async function getMovie(id: string) {
  // await new Promise(resolve => setTimeout(resolve, 5000))
  return await fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .catch(error => error.message)
}


export default async function MovieInfo({ id }) {
  const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>Homepage &rarr;</a>
      </div>
    </div>
  )
}
