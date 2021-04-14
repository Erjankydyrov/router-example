import classes from "./WorldNews.module.css";
import WorldPostList from "./WorldPostList/WorldPostList";

const WorldNews = () => {
    return ( 
        <div className={classes.WorldNews}>
            <WorldPostList />
        </div>
    );
}
 
export default WorldNews;