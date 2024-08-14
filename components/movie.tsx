"use client"

import styles from '@styles/movie.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Movie({ movie }) {
  const router = useRouter()

  const onClick = () => {
    router.push(`/movies/${movie.id}`)
  }

  return (
    <div className={styles.movie}>
      <img src={movie.poster_path} alt={movie.title} onClick={onClick} />
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </div>
  )
}
