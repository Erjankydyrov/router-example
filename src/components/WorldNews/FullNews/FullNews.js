import { Link } from "react-router-dom";
import classes from "./FullNews.module.css";

const FullNews = ({ match }) => {
    return ( 
        <div className={classes.FullNews}>
            <Link to="/worldNews">Back to World News</Link>
            <h1>Post #{match.params.id}</h1>
        </div>
    );
}
 
export default FullNews;