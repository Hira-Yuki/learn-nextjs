import MovieCredits from "@components/movie-credit"
import MovieInfo, { getMovie } from "@components/movie-info"
import MovieProvider from "@components/movie-provider"
import MovieVideos from "@components/movie-videos"
import { Suspense } from "react"

export async function generateMetadata({
  params: { id },
}) {
  const { title } = await getMovie(id)
  return {
    title,
  }
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string }
}) {

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie providers</h1>}>
        <MovieProvider id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
