import axios from 'axios'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constant'
import {getTrailerMovie} from '../redux/movieSlice'

const useMovieById = async(movieId) => {
    const dispatch = useDispatch();

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
        console.log("movie Record")
        console.log(res.data.results)
        const trailer = res?.data?.results?.filter((item) => {
            return item.type === "Trailer";
        })
        dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));

    }catch(error){
        console.log(error)
    }
}

export default useMovieById