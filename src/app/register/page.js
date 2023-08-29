"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/style/login.module.css"
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const route = useRouter();

  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [onverify, setOnVerify] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onVer = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "/api/users/verifyUser";
      const newData = { ...data, verificationCode };
      const { data: res } = await axios.post(url, newData);
      setLoading(false);
      setData({
        name: "",
        email: "",
        verificationCode:"",
        password: "",
      });
      setVerificationCode("");
      setOnVerify(false);
      toast.success(res.message, {
        style: { backgroundColor: "darkgreen", color: "white" },
      });
      route.push('/login')
      console.log(res.message);
    } catch (error) {
      setLoading(false);
      setData({
        name: "",
        email: "",
        verificationCode:"",
        password: "",
      });
      setVerificationCode("");
      toast.error(error.response.data.message, {
        style: { backgroundColor: "brown", color: "white" },
      });
      console.log(error.response.data.message);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "/api/users/register";

      const { data: res } = await axios.post(url, data);
      setLoading(false);
      setOnVerify(true);
      toast.success(res.message, {
        style: { backgroundColor: "darkgreen", color: "white" },
      });
      console.log(res.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
        style: { backgroundColor: "brown", color: "white" },
      });
      console.log(error.response.data.message);
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.logincon}>
      {!onverify ? (
        <>
          <h1>Create your account</h1>
          <h2>
            to continue using <span>YourBook</span>
          </h2>
          <div className={styles.topbut}>
            <button className={styles.logbutton}>
              <span>
                <Image
                  className={styles.icon}
                  src="/images/google.png"
                  alt="me"
                  width="100"
                  height="100"
                />
              </span>
              Coutinue With Google
            </button>
            <button className={styles.logbutton}>
              <span>
                <Image
                  className={styles.icon}
                  src="/images/code.png"
                  alt="me"
                  width="100"
                  height="100"
                />
              </span>
              Continue with Github
            </button>
          </div>
          <hr className={styles.rounded} />
          <div className={styles.form}>
            <label className={styles.emlabel}>Username</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={data.name}
            />
            <label style={{ marginTop: "0.4vw" }} className={styles.emlabel}>
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
            <label className={styles.passlabel}>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />

            {loading ? (
              <div className={styles.loader}></div>
            ) : (
              <button
                disabled={!data.name || !data.email || !data.password}
                onClick={onSubmit}
              >
                Submit
              </button>
            )}
          </div>
          <Link className={styles.signup} href="/">
            Already Have Account ? SignIn
          </Link>
        </>
      ) : (
        <div className={styles.form}>
          <h1>Verify your account</h1>
          <h2>
            to continue using <span>YourBook</span>
          </h2>
          <Image
            className={styles.icon2}
            src="/images/shield.png"
            alt="me"
            width="1000"
            height="1000"
          />
          <label style={{ marginTop: "0.9vw" }} className={styles.emlabel}>
            Enter Code
          </label>
          <input
            type="text"
            name="password"
            onChange={(e) => setVerificationCode(e.target.value)}
            value={verificationCode}
          />

          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <button disabled={!verificationCode} onClick={onVer}>
              Verify
            </button>
          )}
        </div>
      )}
    </div>
    </div>
  );
};

export default Register;
