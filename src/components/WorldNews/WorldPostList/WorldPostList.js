import classes from "./WorldPostList.module.css";
import { Link } from "react-router-dom";

const WorldPostList = () => {

    const results = [];
    for (let id = 1; id <=3; id++) {
        results.push(<li>
                        <img src="" alt=""/>
                        <Link to={"/worldNews/" + id}>News number #{id}</Link>
                    </li>)
    }                
    return ( 
        <div className={classes.WorldPostList}>
            {results}
        </div>
    );
}
 
export default WorldPostList;