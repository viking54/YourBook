"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  const getUserDetails = async () => {
   try {
    const response = await axios.get("/api/users/me");
    console.log(response.data.data);
    setData(response.data.data);
   } catch (error) {
      console.log(error.response.data.message);
   }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div style={{ color: "whitesmoke" }}>
      {!data._id ? (<h2>loading..</h2>) : (<h2>{data.name}</h2>)}
    </div>
  );
};

export default About;
