import axios from "axios";
import { options } from "../utils/constant";
import {getNowPlayingMovies} from '../redux/movieSlice'
import { Now_Playing_Movie } from "../utils/constant";
import { useDispatch } from "react-redux";



const usenowPlayingMovies = async () =>{
    const dispatch = useDispatch();
    try{
      const res = await axios.get(Now_Playing_Movie,options);
      console.log(res)
      dispatch(getNowPlayingMovies(res.data.results))
    }catch(error){
      console.log(error)
    }
}

export default usenowPlayingMovies 