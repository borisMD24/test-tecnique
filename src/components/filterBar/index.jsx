import "./style.scss"
import { TextField } from "@mui/material"
import GenreFilterDrawer from "./genreFilterDrawer"
import { useContext } from "react";
import Filters_ctx from "../../contexts/filtersContext";
export default function FiltersBar(){
    const filtersCtx = useContext(Filters_ctx);
    return(
        <div className="filters-bar">
            <div className="bar">
                <div className="text-field-container">
                    <TextField id="standard-basic" label="Rechercher" variant="standard" 
                    onChange={filtersCtx.methods.setTitle}/>
                </div>
                <GenreFilterDrawer/>
            </div>
        </div>
    )
}