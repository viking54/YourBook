"use client";
import React from "react";
import navbar from "../style/navbar.module.css";
import Link from "next/link";

import { onLogout } from "./logout";

const Navbar = () => {
 
 


  return (
    <>
      <div className={navbar.container}>
        <h1>YourBook</h1>
        <div className={navbar.navthing}>
          <Link href={"/"} className={navbar.navhead}>
            Login
          </Link>
          <Link href={"/register"} className={navbar.navhead}>
            Register
          </Link>
          <Link href={"/contact"} className={navbar.navhead}>
            Contact Us
          </Link>
          <Link href={"/about"} className={navbar.navhead}>
            About
          </Link>
          <button onClick={()=>onLogout()} className={navbar.navbutt}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
