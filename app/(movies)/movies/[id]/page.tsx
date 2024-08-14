import { API_URL } from "app/(home)/page"

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise(resolve => setTimeout(resolve, 5000))
  return await fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .catch(error => error.message)
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`)
  await new Promise(resolve => setTimeout(resolve, 5000))
  return await fetch(`${API_URL}/${id}/videos`)
    .then(response => response.json())
    .catch(error => error.message)
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string }
}) {
  console.log('Fetching start')
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  console.log('Fetching end')

  return (
    <h1>{movie.title}</h1>
  )
}
