import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterMain() {
  return (
    <div className="w-full mt-44">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                src={require("../images/logo-navbar.png")}
                alt="Flowbite Logo"
                name="DEGIDES"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Desa Bukor™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Link>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sky-700 text-xl"
                />
              </Link>

              <Link>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sky-700 text-xl"
                />
              </Link>

              <Link>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sky-700 text-xl"
                />
              </Link>

              <Link>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sky-700 text-xl"
                />
              </Link>

              <Link>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sky-700 text-xl"
                />
              </Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
