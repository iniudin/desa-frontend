import { faFacebook, faGoogle, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircle, faCopyright, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterMain() {
  return (
    <div className="container bg-sky-700 flex justify-center items-center py-12 mt-44">
      <div className="w-11/12 py-3">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <img
              src={require("../images/logo-navbar.png")}
              alt="Logo"
              className="w-20 rounded mx-auto md:mx-1"
            />
            <p className="text-white text-xs mt-2 text-justify md:text-left pr-5 md:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              sapiente, itaque minus repellat.
            </p>

            <div className="flex mt-2">
              <div className="col-span-1 pr-1 md:p-1">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-2 h-2 p-2 text-white bg-sky-500 rounded-full"
                  />
                </Link>
              </div>

              <div className="col-span-1 pr-1 md:p-1">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="w-2 h-2 p-2 text-white bg-sky-500 rounded-full"
                  />
                </Link>
              </div>

              <div className="col-span-1 pr-1 md:p-1">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-2 h-2 p-2 text-white bg-sky-500 rounded-full"
                />
              </div>

              <div className="col-span-1 pr-1 md:p-1">
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="w-2 h-2 p-2 text-white bg-sky-500 rounded-full"
                />
              </div>

              <div className="col-span-1 pr-1 md:p-1">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-2 h-2 p-2 text-white bg-sky-500 rounded-full"
                />
              </div>
            </div>

            <p className="text-white text-xs mt-2">Contact us: +62(0) 3 8376 6284</p>

            <p className="text-sky-300 text-xs">
              Write us: noreply@gmail.com
            </p>
          </div>

          <div className="col-span-1 mr-3 md:mr-0">
            <h5 className="text-white text-lg font-bold">Recent Posts</h5>

            <div className="grid grid-cols-3 mt-3">
              <div className="col-span-3 md:col-span-2 p-3 bg-sky-800 rounded">
                <p className="text-xs text-white">
                  Lorem ipsum dolor sit amet.
                </p>
                <hr className="w-full" />
                <p className="text-white text-xs">
                  <span>
                    <FontAwesomeIcon icon={faTimesCircle} className="text-slate-400" />
                  </span>
                  {" "}
                  May, 8 2014
                </p>
              </div>

              <div className="col-span-1 hidden md:block">
                <img
                  src={require("../images/image-2.png")}
                  alt="Gambar 1"
                  className="w-9/12"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mt-2">
              <div className="col-span-3 md:col-span-2 p-3 bg-sky-800 rounded">
                <p className="text-xs text-white">
                  Lorem ipsum dolor sit amet.
                </p>
                <hr className="w-full" />
                <p className="text-white text-xs">
                  <span>
                    <FontAwesomeIcon icon={faTimesCircle} className="text-slate-400" />
                  </span>
                  {" "}
                  May, 7 2014
                </p>
              </div>

              <div className="col-span-1 hidden md:block">
                <img
                  src={require("../images/image-1.png")}
                  alt="Gambar 1"
                  className="w-9/12"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="text-lg text-white font-bold">Programs</h5>
            <p className="text-xs text-white mt-3 pr-5 text-justify md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              quibusdam.
            </p>

            <div className="grid grid-cols-12 mt-2">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faCircle} className="text-white" />
              </div>

              <div className="col-span-11 pl-2 pt-1">
                <p className="text-xs text-sky-300">Lorem ipsum.</p>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faCircle} className="text-white" />
              </div>

              <div className="col-span-11 pl-2 pt-1">
                <p className="text-xs text-sky-300">Lorem ipsum.</p>
              </div>
            </div>

            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faCircle} className="text-white" />
              </div>

              <div className="col-span-11 pl-2 pt-1">
                <p className="text-xs text-sky-300">Lorem ipsum.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 text-justify md:text-left">
            <h5 className="text-lg text-white font-bold">The Company</h5>
            <p className="text-white text-xs mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              velit enim accusamus dolore!
            </p>
            <p className="text-white text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              earum labore. Nemo accusantium maxime sapiente reprehenderit
              voluptatem accusamus expedita quibusdam, atque neque est qui
              voluptatum?
            </p>
          </div>
        </div>

        <hr className="w-full mt-10" />

        <div className="grid grid-cols-1 mt-3">
          <div className="col-span-1 text-left pt-1">
            <h5 className="text-base text-white text-center">
              <span>
                <FontAwesomeIcon icon={faCopyright} className="text-white" />
              </span>{" "}
              2022 BeEco-BeTheme. All Rights Reserved.{" "}
              <span className="text-sky-300">DIGIDES</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
