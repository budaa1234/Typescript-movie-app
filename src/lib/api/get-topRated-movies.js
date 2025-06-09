export const getTopRatedMovies = async () => {
    const response = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/top_rated?language=en-US&page=1`,
    {
        method: "GET",
        headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        }
    } 
    )
    const data = await response.json()

    return data
    
}
