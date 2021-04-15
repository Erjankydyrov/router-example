import classes from "./Home.module.css";
import Johnny from "../../images/Jonni.jpg";

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1>Home</h1>
      <div className={classes.dom}>
            <div className={classes.otherNews}>
                <h2>Other news</h2>
                <ul className={classes.ulOther}>
                    <li><a href="">Coronavirus</a></li>
                    <li><a href="">Films</a></li>
                    <li><a href="">Hollywood</a></li>
                    <li><a href="">Cartoons</a></li>
                    <li><a href="">Countries</a></li>
                    <li><a href="">Actors</a></li>
                    <li><a href="">Sport</a></li>
                    <li><a href="">Cybersport</a></li>
                </ul>
            </div>
            <div className={classes.newglav}>
                <img src={Johnny} alt="Johnny Depp" />
            <div className={classes.news}>
            <h2>Johnny Depp</h2>
            <p>
                John Christopher Depp II is an American actor, producer, and
                musician. He has been nominated for ten Golden Globe Awards, winning
                one for Best Actor for his performance of the title role in Sweeney
                Todd: The Demon Barber of Fleet Street (2007), and has been
                nominated for three Academy Awards for Best Actor, among other
                accolades. Depp made his film debut in the 1984 film A Nightmare on
                Elm Street, before rising to prominence as a teen idol on the
                television series 21 Jump Street (1987–1990). He had a supporting
                role in Oliver Stone's 1986 war film Platoon and played the title
                character in the 1990 romantic fantasy Edward Scissorhands.
            </p>
            <a href="https://en.wikipedia.org/wiki/Johnny_Depp">Read more</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
