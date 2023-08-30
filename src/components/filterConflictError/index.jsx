import { useContext } from "react";
import Filters_ctx from "../../contexts/filtersContext";
import { Alert, AlertTitle } from "@mui/material";
import "./style.scss"
export default function FilterConflictError(){
    const filtersCtx = useContext(Filters_ctx);
    return(
        filtersCtx.genres.length > 0 && filtersCtx.title.length > 0 &&
        <div className="filter-conflict-error">
            <Alert severity="warning">
                <AlertTitle>API misfunction</AlertTitle>
                You can't search for a film by its <strong>Name</strong> and its <strong>Genre simultaneously</strong>. The films below are selected by genre(s) : {filtersCtx.genres.map(g => g.name).join(", ")}
            </Alert>
        </div>
    )
}