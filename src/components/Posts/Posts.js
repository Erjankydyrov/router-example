import PostList from "./PostList/PostList";
import classes from "./Posts.module.css";

const Posts = () => {
    return ( 
        <div className={classes.Posts}>
            Here posts
            <PostList />
        </div>
    );
}
 
export default Posts;