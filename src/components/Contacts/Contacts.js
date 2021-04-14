import classes from "./Contacts.module.css";

const Contacts = () => {
    return ( 
        <div className={classes.Contacts}>
            <h2>This is contacts page</h2>
            <p className={classes.uscon}>Us contacts</p>
            <span>
                <p>+ 999 000 000 000</p>
                <p>+ 999 000 000 000</p>
            </span>
        </div>
    );
}
 
export default Contacts;