export const API_END_POINT = "http://localhost:8080/api/v1/user";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzkyOGZkMjU0MTFhYjc2OGZlN2QyODRlNWEzMGU5OSIsIm5iZiI6MTcyMDY4NjI5Ny4yNDMwODgsInN1YiI6IjY2OGVkYzUxNTNiYjc2OGRiMDE1ZTdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aybUdryj_Mjz47uNB-Q8RR4zHHPZGkNBEzmDJUNttVU'
    }
  };
export const  Now_Playing_Movie = `https://api.themoviedb.org/3/movie/now_playing` 
export const Popular_Movies = `https://api.themoviedb.org/3/movie/popular`
export const TopRated_Movies =  `https://api.themoviedb.org/3/movie/top_rated`
export const Upcoming_Movies = `https://api.themoviedb.org/3/movie/upcoming`
export const Banner_Url = "https://image.tmdb.org/t/p/w500"