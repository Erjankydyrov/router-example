import classes from "./WorldNews.module.css";

const WorldNews = () => {
    return ( 
        <div className={classes.WorldNews}>
            { match.isExact 
            ? <PostList /> 
            : <Route path="/posts/:id" component={PostFull} />}
        </div>
    );
}
 
export default WorldNews;