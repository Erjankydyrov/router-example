import classes from "./WorldVolut.module.css";
import diagram from "../../images/diagram.png"

const WorldVolut = () => {
    return ( 
        <div className={classes.WorldVolut}>
            <div className={classes.voluta}>
                <h2>Dollar</h2>
                <img src={diagram} className={classes.diagram} />
            </div>
        </div>
    );
}
 
export default WorldVolut;