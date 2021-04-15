import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <h2>About us</h2>
      <div className={classes.divpar}>
        <div className={classes.section}>
          <h3>Title</h3>
          <p className={classes.par}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
          Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
          commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
          Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
          at luctus est eros in sapien.
        </p><button>Read more</button></div>
        <div className={classes.section}>
          <h3>Title</h3>
          <p className={classes.par}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
          Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
          commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
          Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
          at luctus est eros in sapien.
        </p><button>Read more</button></div>
        <div className={classes.section}>
          <h3>Title</h3>
          <p className={classes.par}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          dignissim risus. Sed elit ex, dignissim ac est nec, porta rutrum lorem.
          Aenean maximus vestibulum ullamcorper. Aliquam lobortis, odio a suscipit
          commodo, dolor tortor mattis urna, eu pretium enim ipsum eget turpis.
          Aliquam aliquam, orci sed bibendum tristique, velit nisl facilisis orci,
          at luctus est eros in sapien.
        </p><button>Read more</button></div>
      </div>
    </div>
  );
};

export default About;
