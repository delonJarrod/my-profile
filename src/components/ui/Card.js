import classes from "./Card.module.css";

function Card(props) {
  return (
    <div>
      <div className={classes.card}>
        <div
          className={`bg-white shadow-2xl  rounded-3xl p-5 text-center w-full `}
        >
          <div className="border-b-2">
            {/* Spin Slow (className = "animate-spin-slow")*/}
            <p className="animate-bounce pb-5 text-xl font-Nunito subpixel-antialiased md:text-4xl">
              <b>{props.title}</b>
            </p>
          </div>
          <div>
            <div className="d-flex transition duration-500 transform hover:scale-105 text-left text-xs md:text-xl">
              <div className={classes.featurebox}>{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
