import { Route } from "react-router";
import FullNews from "./FullNews/FullNews";
import WNPosts from "./WNPosts/WNPosts";
import classes from "./WorldNews.module.css";

const WorldNews = ({ match }) => {
    return ( 
        <div className={classes.WorldNews}>
            { match.isExact 
            ? <WNPosts /> 
            : <Route path="/wolrdNews/:id" component={FullNews} />}
        </div>
    );
}
 
export default WorldNews;