import { useQuery } from "react-query";
import axios from "axios";
import TMDB from "../constants/tmdb";
import { useEffect, useContext } from "react";
import Filters_ctx from "../contexts/filtersContext";

export default function movieCache(page){
  const filtersCtx = useContext(Filters_ctx);
  const handleGenres = () => {
    return filtersCtx.genres.length > 0 ? `&with_genres=${filtersCtx.genres.map(g => g.id)}` : "" 
    
  }
  const handleTitle = () => {
    return filtersCtx.title.length > 0 ? `&query=${filtersCtx.title.replaceAll(" ", "+")}` : "" 
    
  }
  const handleDate = () => { // warning : may seem to be broken but I think this is the API's fault
    return filtersCtx.beginDate.length > 0 ? `&primary_release_date.lte=${filtersCtx.beginDate}` : ""
  }
  const buildUrl = () => {
    return `${
      filtersCtx.title.length > 0 ? 
      TMDB.search :
      TMDB.base
    }?api_key=${
      TMDB.api_key
    }${
      handleDate()
    }&language="${
      TMDB.language
    }"&page=${
      page||1
    }${
      handleTitle()
    }${
      handleGenres()
    }`.replaceAll('\n', "").replaceAll(' ', "")
  }
  const { data, isLoading, isError, refetch } = useQuery(

    ["movies"],

    () => axios.get(buildUrl()),

    {

      staleTime: 10000,
      
      refetchOnWindowFocus: false
    }

  );
    useEffect(()=>{
      console.log(filtersCtx.beginDate);
        console.log(handleDate());
        console.log(buildUrl());
        refetch();
    }, [page, 
      filtersCtx.genres.length, 
      filtersCtx.title,
      filtersCtx.beginDate
    ])
    return [data, isLoading, isError]
}