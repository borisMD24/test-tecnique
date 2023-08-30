import { useEffect, useState } from "react";
export default function useFiltersContext(){
    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState([]);
    const [beginDate, setBeginDate] = useState("");

    const appendGenre = (genre) => {
        setGenres([genre, ...genres])
    } 

    const appendTitle = (e) => {
        setTitle(e.target.value)
    } 
    const removeGenre = (genre) => {
        setGenres([...genres].filter(g => g.id != genre.id))
    }
    
    const genreIsAppended = (genre) => {
        return genres.filter(g => g.id === genre.id).length > 0
    }
    return{
        genres,
        title,
        beginDate,
        methods:{
            appendGenre,
            removeGenre,
            genreIsAppended,
            setTitle : appendTitle,
            setBeginDate
        }
    }
}