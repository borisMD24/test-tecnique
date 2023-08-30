import TMDB from "../../constants/tmdb";
import "./style.scss";

export default function Movie(props){
    return(
        <div className="movie">
            <div className="title">
                {props.data.title}
            </div>
            <div className="content">
                <div className="poster">
                    <img className="poster" src={TMDB.getImageUrl(props.data.poster_path)} alt="" />
                </div>
                <div className="overview">
                    {props.data.overview}
                </div>
            </div>
        </div>
    )
}