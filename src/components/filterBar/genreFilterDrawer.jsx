import { Button, Drawer, CircularProgress} from "@mui/material"
import { useState, useContext } from "react"
import Filters_ctx from "../../contexts/filtersContext";
import filtersCache from "../../caches/filtersCache"
import DateSelector from "../dateSelector";
import Genre from "./genre";


export default function GenreFilterDrawer(){
    const [data, isLoading, isError] = filtersCache();
    const [open, setOpen] = useState(false)
    const filtersCtx = useContext(Filters_ctx)
    return(
        <>
            <Button onClick={()=>{setOpen(true)}}>Filter by genres</Button>
            <Drawer
            PaperProps={{
                    sx: {
                      flexDirection: "row",
                      justifyContent: "space-around",
                      margin: "5vh 5vw",
                      padding : ".75em 1em",
                      overflow : "initial",
                      borderRadius: "100vw"
                    
                  }}
            }
            anchor={"bottom"}
            open={open}
            onClose={()=>{setOpen(false)}}
            >
                <div className="cta">
                    Select a genre
                </div>
                <div className="date-selector-container">
                    <DateSelector change={filtersCtx.methods.setBeginDate}/>
                </div>
                
                {

                    isLoading ?             // if is loading : 
                    <CircularProgress /> :  // else 
                    isError ?               // if error :
                    <span>
                        Erreur serveur
                    </span> :               // display the movies
                    data.data.genres.map((genre, i) => (
                        <Genre genre={genre} key={i}/>
                    ))

                }
            </Drawer>
        </>
    )
}