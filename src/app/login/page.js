"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../../style/login.module.css";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = "/api/users/login";
      const { data: res } = await axios.post(url, data);
      toast.success(res.message, {
        style: { backgroundColor: "darkgreen", color: "white" },
      });

      setLoading(false);
      router.push("/about");

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
    <div className={styles.logincon}>
      <h1>Sign in</h1>
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
        <label className={styles.emlabel}>Email</label>
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
          <button disabled={!data.email || !data.password} onClick={onLogin}>
            Submit
          </button>
        )}
      </div>
      <Link className={styles.signup} href="/register">
        Create Account ?{" "}
      </Link>
    </div>
  );
};

export default Login;
