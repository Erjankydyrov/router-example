import { Link } from "react-router-dom";
import classes from "./WNPosts.module.css";

const WNPosts = () => {

    const results = [];
    for (let id = 1; id <=5; id++) {
        results.push(<li><Link to={"/worldNews/" + id}>Post number #{id}</Link></li>)
    }
    return ( 
        <ul className={classes.WNPosts}>{results}</ul>
    );
}
 
export default WNPosts;