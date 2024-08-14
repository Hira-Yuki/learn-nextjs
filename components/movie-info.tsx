import { API_URL } from "app/(home)/page"

async function getMovie(id: string) {
  // await new Promise(resolve => setTimeout(resolve, 5000))
  return await fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .catch(error => error.message)
}


export default async function MovieInfo({ id }) {
  const movie = await getMovie(id)
  return (
    <h6>{JSON.stringify(movie)}</h6>
  )
}
