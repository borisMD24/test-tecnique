import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function DateSelector(props){
    return(
        <div className="date-selector">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                    Sélectionner une date de sortie
                </div>
                <DatePicker onChange={(e)=>{props.change(e["$d"].toISOString().slice(0, 10));}}/>
            </LocalizationProvider>
        </div>
    )
}