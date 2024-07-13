import axios from 'axios'
import { options, TopRated_Movies } from '../utils/constant'
import { gettopRatedMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useTopRatedMovies = async () => {
    const dispatch = useDispatch()
    try{
        const res = await axios.get(TopRated_Movies, options);
        dispatch(gettopRatedMovies(res.data.results))

    }catch(error){
        console.log(error)
    }
}

export default useTopRatedMovies