
import { resolve } from "path"
import { useEffect, useState } from "react"

export const metadata = {
  title: 'Home',
}

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'


async function getMovies() {
  await new Promise(resolve => setTimeout(resolve, 10000))
  return fetch(URL)
    .then(response => response.json())
    .catch(error => error.message)
}

export default async function HomePage() {

  const movies = JSON.stringify(await getMovies())

  return (
    <div>
      {movies}
    </div>
  )
}
