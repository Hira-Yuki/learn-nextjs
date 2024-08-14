import { API_URL } from "app/(home)/page"

async function getVideos(id: string) {
  // await new Promise(resolve => setTimeout(resolve, 3000))
  return await fetch(`${API_URL}/${id}/videos`)
    .then(response => response.json())
    .catch(error => error.message)
}

export default async function MovieVideos({ id }) {

  const videos = await getVideos(id)

  return (
    <h6>{JSON.stringify(videos)}</h6>
  )
}
