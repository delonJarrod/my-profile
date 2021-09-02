import classes from "./Card.module.css";
import { BsPhone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function Card({ title, phone, email }) {
  return (
    <div>
      <div className={classes.card}>
        <div
          className={`bg-white shadow-lg rounded-3xl p-5 text-center md:w-1/2 w-full `}
        >
          <div className="border-b-2">
            {/* Spin Slow (className = "animate-spin-slow")*/}
            <p className="animate-bounce pb-5 text-xl font-Nunito subpixel-antialiased md:text-4xl">
              <b>{title}</b>
            </p>
          </div>
          <div>
            <div className="d-flex transition duration-500 transform hover:scale-105 text-left text-xs md:text-xl">
              <div className="p-3">
                <p className="font-Nunito">
                  <div className="ml-5 mt-5">
                    <a href="tel:0711968195">
                      <b>
                        <em>Phone:{"  "}</em>
                      </b>
                      {phone}
                    </a>
                  </div>
                </p>

                <p className="font-Nunito">
                  <div className="ml-5 mt-5">
                    <a href="mailto:delonjarrod1307@gmail.com">
                      <b>
                        <em>Email:{"  "}</em>
                      </b>
                      {email}
                    </a>
                  </div>
                </p>
                <p className="font-Nunito">{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
