import Movie from "@components/movie";
import styles from '@styles/home.module.css';
import { API_URL } from "app/constants";

export const metadata = {
  title: 'Home',
}

async function getMovies() {
  return await fetch(API_URL)
    .then(response => response.json())
    .catch(error => error.message)
}

export default async function HomePage() {

  const movies = await getMovies()

  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
