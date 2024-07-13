import axios from 'axios'
import { options, Upcoming_Movies } from '../utils/constant'
import { getupcomingMovies } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useUpcomingMovies = async () => {
    const dispatch = useDispatch()
    try{
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getupcomingMovies(res.data.results))

    }catch(error){
        console.log(error)
    }
}

export default useUpcomingMovies