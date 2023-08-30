import { useQuery } from "react-query";
import axios from "axios";
import TMDB from "../constants/tmdb";
import { useEffect } from "react";

export default function movieCache(){
  const { data, isLoading, isError, refetch } = useQuery(

    ["movies"],

    () => axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=92c7d4720fc2bb947ca5818ab79d53cd`),

    {

      staleTime: 10000,
      
      refetchOnWindowFocus: false
    }

  );
    return [data, isLoading, isError]
}