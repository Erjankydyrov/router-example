import { Route } from "react-router";
import FullNews from "./FullNews/FullNews";
import classes from "./WorldNews.module.css";
import WorldPostList from "./WorldPostList/WorldPostList";

const WorldNews = ({ match }) => {
    return ( 
        <div className={classes.WorldNews}>
            { match.isExact
            ? <WorldPostList />
            : <Route path="/worldNews/:id" component={FullNews} /> }
        </div>
    );
}
 
export default WorldNews;