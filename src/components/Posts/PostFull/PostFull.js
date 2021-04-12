import classes from "./PostFull.module.css";

const PostFull = ({ match }) => {
    return ( 
        <div className={classes.PostFull}>
            Post #{match.params.id}
        </div>
    );
}
 
export default PostFull;