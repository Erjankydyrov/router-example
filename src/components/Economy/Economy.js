import classes from "./Economy.module.css";
import image1 from "../../images/analytics.svg";
import image2 from "../../images/graph.svg";
import image3 from "../../images/profit.svg";
import image4 from "../../images/fluctuation.svg";

const Economy = () => {
  return (
    <div className={classes.Economy}>
      <div className={classes.titleCom}>
        <img src={image1} alt="" />
        <h4>Analytics</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
          dignissim, egestas justo id, aliquam augue. Phasellus maximus eu odio
          sed posuere. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <button>Read more</button>
      </div>
      <div className={classes.titleCom}>
        <img src={image2} alt="" />
        <h4>Graph</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
          dignissim, egestas justo id, aliquam augue. Phasellus maximus eu odio
          sed posuere. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <button>Read more</button>
      </div>
      <div className={classes.titleCom}>
        <img src={image3} alt="" />
        <h4>Profit</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
          dignissim, egestas justo id, aliquam augue. Phasellus maximus eu odio
          sed posuere. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <button>Read more</button>
      </div>
      <div className={classes.titleCom}>
        <img src={image4} alt="" />
        <h4>Fluctuation</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a enim
          dignissim, egestas justo id, aliquam augue. Phasellus maximus eu odio
          sed posuere. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default Economy;
