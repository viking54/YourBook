"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "@/style/profile.module.css";
const About = () => {
  // const [data, setData] = useState([]);
const userr = useSelector((state) => state.user);

  useEffect(() => {
     
  },[])


  return (
    <div className={styles.profileCon}>
      {" "}
      <h1>{userr.data.name}</h1>
    </div>
  );
};

export default About;
