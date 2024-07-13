import axios from 'axios'
import { options, Popular_Movies } from '../utils/constant'
import { getPopularMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const usePopularMovies = async () => {
    try{
        const dispatch = useDispatch()
        const res = await axios.get(Popular_Movies, options);
        dispatch(getPopularMovies(res.data.results))

    }catch(error){
        console.log(error)
    }
}

export default usePopularMovies