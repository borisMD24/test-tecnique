const getImageUrl = (uri) => {
    return `https://image.tmdb.org/t/p/original/${uri}`
}
const TMDB = {
    api_key : "92c7d4720fc2bb947ca5818ab79d53cd",
    language : "en-US",
    base : "https://api.themoviedb.org/3/discover/movie",
    genres : "https://api.themoviedb.org/3/genre/movie/list",
    search : "https://api.themoviedb.org/3/search/movie",
    getImageUrl
}
export default TMDB