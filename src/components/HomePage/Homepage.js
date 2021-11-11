import classes from "./Homepage.module.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignUp from "../signUp/SignUp";

function Homepage() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-green-300 to-blue-300 font-Nunito md:p-20 h-auto">
      <div className="container md:mt-20 pt-20  h-screen">
        <div className="font-Nunito">
          <div className="p-5">
            <div className="flex flex-wrap text-center">
              <div className="flex-col text-left max-w-md md:ml-36">
                <h1 className="font-bold subpixel-antialiased text-4xl md:text-6xl md:mb-10 mb-10">
                  Company Name
                </h1>
                <h1 className="font-bold text-xl subpixel-antialiased md:mb-10 mb-10">
                  ~{" "}
                  <em>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </em>{" "}
                  ~
                </h1>
              </div>
              <div className="flex-col">
                <div className="flex">
                  <div className={classes.SignUp}>
                    <SignUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
