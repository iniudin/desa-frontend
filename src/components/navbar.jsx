import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMain() {
  return (
    <div className="fixed w-full custom-z-index">
      <Navbar fluid={true} className="py-5 shadow-lg">
        <Navbar.Brand>
          <img
            src={require("../images/logo-navbar.png")}
            className="rounded h-6 mr-3 ml-20 sm:h-10"
            alt="Logo"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap text-sky-700 dark:text-white">
            DIGIDES
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="mr-10" />
        <Navbar.Collapse className="pr-16">
          <Link to={"/"}>
            <Navbar to={"/"} className="font-bold custom-font-color-navbar">
              Home
            </Navbar>
          </Link>
          <Navbar className="custom-font-color-navbar">
            <Dropdown label="Fitur" inline={true}>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Administrasi Desa
                </Dropdown.Item>
              </Link>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Pelayanan Desa
                </Dropdown.Item>
              </Link>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Perpajakan (PBB-P2)
                </Dropdown.Item>
              </Link>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Bantuan Sosial
                </Dropdown.Item>
              </Link>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Website Profil
                </Dropdown.Item>
              </Link>
              <Link to={"/"}>
                <Dropdown.Item className="custom-font-color-navbar">
                  Absensi & Buku Utama
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </Navbar>
          <Link to={"/list-article"}>
            <Navbar to={"/list-article"} className="custom-font-color-navbar">
              Artikel
            </Navbar>
          </Link>
          <Link to={"/contact"}>
            <Navbar to={"/contact"} className="custom-font-color-navbar">
              Kontak
            </Navbar>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
