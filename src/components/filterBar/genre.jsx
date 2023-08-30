import { Chip } from "@mui/material";
import { useContext } from "react";
import Filters_ctx from "../../contexts/filtersContext";
export default function Genre(props){
    const filtersCtx = useContext(Filters_ctx);
    const click = () => {
        !filtersCtx.methods.genreIsAppended(props.genre)?
        filtersCtx.methods.appendGenre(props.genre):
        filtersCtx.methods.removeGenre(props.genre)
    }
    return(
        <div className="genre">
            {
                !filtersCtx.methods.genreIsAppended(props.genre) ?
                <Chip label={props.genre.name} onClick={click}/>:
                <Chip label={props.genre.name} onClick={click} onDelete={click}/>
            }
        </div>
    )
}