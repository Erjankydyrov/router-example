import classes from "./FullNews.module.css";
import { Link } from "react-router-dom";

const FullNews = ({ match }) => {
    return ( 
        <div className={classes.FullNews}>
            <Link to="/worldNews">Back to posts</Link>
            <h1>News #{match.params.id}</h1>
        </div>
    );
}
 
export default FullNews;