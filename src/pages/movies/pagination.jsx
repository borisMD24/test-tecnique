import { useState, useEffect } from "react";
import { Button } from "@mui/material";
export default function Pagination (props) {
    const [previousDisabeld, setPreviousDisabeld] = useState(true);

    const updateCurrentPage = (n) => {
        props.setCurrentPage(n)
        setPreviousDisabeld(n === 1);
    }
    const incrementCurrentPage = () => {
        updateCurrentPage(props.currentPage + 1)
    }
    const decrementCurrentPage = () => {
        updateCurrentPage(props.currentPage - 1)
    } 

    const [isLastPage, setIsLastPage] = useState(false);
    useEffect(()=>{
        if(props.data?.data.page === props.data?.data.total_pages){
            setIsLastPage(true)
        } else if (isLastPage && props.data?.data.page < props.data?.data.total_pages){
            setIsLastPage(false)
        }
    }, [props.data])
    return(
        <div className="pagination">
                <Button variant="outlined" 
                    disabled={previousDisabeld} 
                    onClick={decrementCurrentPage}>
                        Previous
                </Button>                
                <Button variant="outlined" 
                    onClick={incrementCurrentPage}
                    disabled={isLastPage}>
                        Next
                </Button>
        </div>
    )
}