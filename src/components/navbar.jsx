"use client";
import React, { useEffect, useState } from "react";
import navbar from "@/style/navbar.module.css";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { logout } from "@/reducer/slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const route = useRouter();

  const onLogout = async () => {
    try {
      const url = "api/users/logout";
      const response = await axios.get(url);
      toast.success(response.data.message, {
        style: { backgroundColor: "darkgreen", color: "white" },
      });
      route.push("/login");
      dispatch(logout());
   
     
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <>
      <div className={navbar.container}>
        <div className={navbar.navthing}>
          <Image
            src="/images/loo.png"
            alt="logo"
            width={100}
            height={100}
            className={navbar.logoimg}
          />
          <Link href={"/"}>
            <Image
              className={navbar.navimg}
              alt="home"
              src="/images/home.png"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/about"}>
            <Image
              className={navbar.navimg}
              alt="profile"
              src="/images/man.png"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/chat"}>
            <Image
              className={navbar.navimg}
              alt="chat"
              src="/images/chat.png"
              width={50}
              height={50}
            />
          </Link>
          <Link href={"/friends"}>
            <Image
              className={navbar.navimg}
              src="/images/friends.png"
              alt="friends"
              width={50}
              height={50}
            />
          </Link>
          {isLoggedIn ? (
            <button onClick={onLogout} className={navbar.navbutt}>
              <Image
                className={navbar.navimg}
                alt="logout"
                src="/images/switch.png"
                width={50}
                height={50}
              />
            </button>
          ) : (
            <>
              <>
                {" "}
                <Link href={"/login"}>
                  <Image
                    className={navbar.navimg}
                    src="/images/log-in.png"
                    alt="login"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/register"}>
                  <Image
                    className={navbar.navimg}
                    alt="register"
                    src="/images/pen.png"
                    width={50}
                    height={50}
                  />
                </Link>
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
