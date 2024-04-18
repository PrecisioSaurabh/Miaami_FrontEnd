import React from "react";
import EmailIcon from "../../assets/LoginPageIcon/Email_Icon.png";
import PasswordIcon from "../../assets/LoginPageIcon/PasswardIcon.png";
import LoginIcon from "../../assets/LoginPageIcon/LoginLogo.png";
import BackGroundImage from "../../assets/LoginPageIcon/BackgroundImage.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen w-screen">
      <div
        className="w-1/2 bg-[#5723EA] flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BackGroundImage})` }}
      >
        <div className="w-2/3 h-5/6 flex-col ">
          <img src={LoginIcon} alt="Logo" className="my-4" />
          <div className="flex-col my-16">
            <h2 className="text-6xl my-4 text-white ">
              {" "}
              Lorem ipsum dolor sit amet{" "}
            </h2>
            <div className="text-xl my-4 text-white ">
              {" "}
              Praesent euismod eget purus ut scelerisque. Donec vitae arcu
              dignissim, placerat nisi at, pulvinar ipsum.{" "}
            </div>
            <button className="w-60 h-14 bg-black text-white rounded-3xl my-8">
              Watch Demo{" "}
            </button>
          </div>
          <div className="flex mt-16">
            <Link className=" text-center py-2 text-white "> Home </Link>
            <Link className="flex-1 text-center py-2 text-white "> Tour </Link>
            <Link className="flex-1 text-center py-2 text-white ">
              {" "}
              Link 1{" "}
            </Link>
            <Link className="flex-1 text-center py-2 text-white ">
              {" "}
              Link 2{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-white flex justify-center items-center">
        <div className="w-9/12 h-5/6">
          <div className="bg-[#5723EA] w-11 h-1.5 my-4"></div>
          <h2 className="text-3xl w-3/4 my-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...{" "}
          </h2>
          <div className="text-xl text-gray-400 w-10/12 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
            dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
            amet
          </div>
          <form>
            <div className="my-4 ">
              {/* <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              /> */}
              {/* <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                style={{ backgroundImage: `url(${EmailIcon})` }}
              /> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="ridho.tijan@gmail.com"
                style={{
                  backgroundImage: `url(${EmailIcon})`,
                  backgroundSize: "30px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div className="my-6">
              {/* <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              /> */}
               <input
                className="shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="************"
                style={{
                  backgroundImage: `url(${PasswordIcon})`,
                  backgroundSize: "30px", 
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
            <div className="flex flex-col  justify-between">
              <button
                className="bg-[#5723EA] text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                SIGN IN
              </button>
              <button>Forgot your Password?</button>
              <button className="text-[#5723EA] text-xl">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


