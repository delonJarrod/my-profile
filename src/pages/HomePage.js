import React from "react";
import SignUp from "../components/signUp/SignUp";
import Homepage from "../components/HomePage/Homepage";
import Cards from "./Cards";
import CV from "./CV";
import DashBoard from "../components/HomePage/DashBoard/DashBoard";
import PreshenCv from "./PreshenCv";

export default function HomePage() {
  return (
    <div>
      {/* <Homepage /> */}
      {/* <DashBoard /> */}
      <Cards />
      {/* <PreshenCv /> */}
    </div>
  );
}
