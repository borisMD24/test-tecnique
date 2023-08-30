import movieCache from "../../caches/movieCache"
import Movie from "../../components/movie";
import { CircularProgress, Alert, AlertTitle } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import Filters_ctx from "../../contexts/filtersContext";
import Pagination from "./pagination";
import Genre from "../../components/filterBar/genre";
import "./style.scss"
import FilterConflictError from "../../components/filterConflictError";
export default function Movies(){
    const filtersCtx = useContext(Filters_ctx)
    const [currentPage, setCurrentPage] = useState(1);
    const [data, isLoading, isError] = movieCache(currentPage)
    useEffect(()=>{
        window.scrollTo(0,0);
    },[currentPage])
    return(
        <>
            <FilterConflictError/>
            <div className="filters">
                {
                    filtersCtx.genres.length > 0 && 

                    <Alert severity="info">
                        filtered by genres : {filtersCtx.genres.map((g, i) => <Genre genre={g} key={i}/>)}
                    </Alert> || 
                    filtersCtx.title.length > 0 &&
                    <Alert severity="info">
                        results for : {filtersCtx.title}
                    </Alert> || 
                    <></>
                }
            </div>
            <div className="movies">
                {
                    isLoading ?             // if is loading : 
                    <CircularProgress /> :  // else 
                    isError ?               // if error :
                    <div className="error">
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            The server response encountered a fatal error, <strong>no popcorns</strong>
                        </Alert>
                    </div> :               // display the movies
                    data.data.results.map((movie, i) => (
                        <Movie data={movie} key={i}/>
                    ))
                }
                {
                    data?.data.results.length == 0 &&
                    <div className="error">
                        <Alert severity="warning">
                            <AlertTitle>Nothing found.</AlertTitle>
                            Your filters may be too restrictive — <strong>take it lightly</strong>
                        </Alert>
                    </div>
                }
            </div>
            <Pagination data={data} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
    )
}