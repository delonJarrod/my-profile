import React, { useState, useRef } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import axios from "axios";
import * as Realm from "realm-web";
import { Alert, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

window.userCheck = false;

function SignUp() {
  const [login, setLogin] = useState("0");
  const [fullName, SetFullName] = useState("");
  const [email, SetEmail] = useState("");
  const [age, setAge] = useState();
  const [password, SetPassword] = useState("");
  const [ConfirmLoginPassword, SetConfirmLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState();
  const [SignUpStatus, setSignUpStatus] = useState();
  const [SignUpSuccess, setSignUpSuccess] = useState();
  const history = useHistory();

  //Store the SignUp User
  let currentUser = "";
  currentUser = {
    fullName: fullName,
    email: email,
    password: password,
    age: age,
  };

  //Login Email && password
  const [LoginEmail, SetLoginEmail] = useState("");
  const [LoginPassword, SetLoginPassword] = useState("");

  const NameRef = useRef();
  const EmailRef = useRef();
  const PassRef = useRef();
  const AgeRef = useRef();

  //Login  Functions to Get the Info For the signUp Functions

  function changeLoginEmail(e) {
    SetLoginEmail(e.target.value);
  }
  function changeLoginPassword(e) {
    SetLoginPassword(e.target.value);
  }

  //Functions to Get the Info For the signUp Functions
  function changeFullName(e) {
    SetFullName(e.target.value);
  }
  function changeEmail(e) {
    SetEmail(e.target.value);
  }
  function changeAge(e) {
    setAge(e.target.value);
  }

  function changePassword(e) {
    SetPassword(e.target.value);
  }
  function changeConfirmLoginPassword(e) {
    SetConfirmLoginPassword(e.target.value);
  }

  //------------------------------------------------------ End Of Geting Details Functions ------------------------------------------------------
  //------------------------------------------------------ Start of Sign Up Handle Function ------------------------------------------------------
  function signUpHandle() {
    setLoginStatus("");
    setSignUpStatus("");
    setLogin("2");
  }

  function onSubmit(e) {
    e.preventDefault();
    // If the fields are not empty
    if (age < 18) {
      setSignUpStatus("You are under the age of 18");
    } else {
      if (password === ConfirmLoginPassword) {
        if (
          fullName !== "" &&
          email !== "" &&
          age >= 18 &&
          password !== "" &&
          ConfirmLoginPassword !== ""
        ) {
          currentUser = {
            fullName: fullName,
            email: email,
            password: password,
            age: age,
          };
          setSignUpStatus("");
          setSignUpSuccess("SignUp Successful");
        } else {
          setSignUpStatus("Do Not Leave Any Field Empty");
        }
      } else {
        setSignUpStatus("Passwords do not match");
      }
    }
  }

  //------------------------------------------------------  End OF Sign Up Functions ------------------------------------------------------
  //Login Functions
  function loginHandle() {
    setLoginStatus("");
    setSignUpStatus("");
    setLogin("1");
  }
  function loginTabHandle(e) {
    console.log("test", currentUser);
    e.preventDefault();
    if (LoginEmail !== "" && LoginPassword !== "") {
      if (currentUser.email !== "" || currentUser.password !== "") {
        if (
          LoginEmail === currentUser.email &&
          LoginPassword === currentUser.password
        ) {
          window.userCheck = true;
          let path = `dashboard`;
          history.push(path);
          console.log("success");
          setLoginStatus("");
          SetLoginEmail("");
          SetLoginPassword("");
        } else {
          setLoginStatus("Email Not Found");
        }
      } else {
        setLoginStatus("Your Email or Password does not exist");
      }
    } else {
      setLoginStatus("Do Not Leave Any Field Empty");
    }
  }

  //------------------------------------------------------  End OF Login Functions ------------------------------------------------------

  if (login === "1" || login === "0") {
    //Return Login Form
    return (
      <div className="flex text-center shadow-2xl p-10 md:hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-xl bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 font-Nunito">
        <div>
          <div>
            <div className="max-w-md w-full space-y-8">
              <div>
                <img
                  className="mx-24 h-12 "
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 animate-bounce">
                  Login
                </h2>
              </div>
              <form>
                {loginStatus && (
                  <Alert className="text-red-700"> {loginStatus}</Alert>
                )}
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={changeLoginEmail}
                      value={LoginEmail}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={changeLoginPassword}
                      value={LoginPassword}
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={loginTabHandle}
                    className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Login
                  </button>
                </div>
                <div className="mt-3">
                  <span role="button">
                    Need an account{" "}
                    <span onClick={signUpHandle} className="text-blue-600">
                      Sign Up Here{" "}
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //ReturnSign UP
      <div className="flex text-center shadow-2xl p-10 md:hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-xl">
        <div>
          <div>
            <div className="max-w-md w-full space-y-8">
              <div>
                <img
                  className="mx-24 h-12 "
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 animate-bounce">
                  Sign Up
                </h2>
              </div>
              <form className="" onSubmit={onSubmit}>
                {SignUpStatus && (
                  <Alert className="text-red-700"> {SignUpStatus}</Alert>
                )}
                {SignUpSuccess && (
                  <Alert className="text-green-700"> {SignUpSuccess}</Alert>
                )}

                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="userName" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className=" appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Full Name"
                      onChange={changeFullName}
                      value={fullName}
                      ref={NameRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      onChange={changeEmail}
                      value={email}
                      ref={EmailRef}
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="sr-only">
                      Age
                    </label>
                    <input
                      id="age"
                      name="Age"
                      type="number"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter Age"
                      onChange={changeAge}
                      value={age}
                      ref={AgeRef}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      onChange={changePassword}
                      value={password}
                      ref={PassRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="ConformPassword"
                      name="COnfirmPassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none mt-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                      onChange={changeConfirmLoginPassword}
                      value={ConfirmLoginPassword}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group mt-5 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign Up
                  </button>
                </div>
                <div className="mt-3">
                  <span role="button">
                    Already have an account{" "}
                    <span onClick={loginHandle} className="text-blue-600">
                      Login Here{" "}
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
