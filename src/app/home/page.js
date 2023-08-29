"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/style/feed.module.css";
import toast from "react-hot-toast";
import logg from "@/style/login.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "@/reducer/userSlice";
import axios from "axios";
const YourHome = () => {
  const [idea, setIdea] = useState("");
  const [image, setImage] = useState(null); // Changed to null

  const dispatch = useDispatch();
  const userr = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
  
  };

  const onPost = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("idea", idea);
      if (image) {
        formData.append("image", image);
      }
      formData.append("userId", userr.data._id);
      const response = await axios.post("/api/users/posts", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.message);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const fetchUser = async () => {
    try {
      const response = await axios.get("/api/users/me");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useState(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.maincontainer}>
        <div className={styles.leftContainer}>
          {/* {userr.data.name ? (
            userr.data.posts
              .slice()
              .reverse()
              .map((postData) => (
                <div key={postData._id} className={styles.feedContainer}>
                  <div className={styles.userDiv}>
                    <div className={styles.nameuserDiv}>
                      <Image
                        src="/images/man.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.userimg}
                      />
                      <h2 className={styles.userName}>{userr.data.name}</h2>
                    </div>

                    <div className={styles.butt}>
                      <button className={styles.newbut}>
                        {" "}
                        <Image
                          src="/images/like.png"
                          alt="logo"
                          width={40}
                          height={40}
                          className={styles.genimg}
                        />
                      </button>
                      <button className={styles.newbut}>
                        {" "}
                        <Image
                          src="/images/comment.png"
                          alt="logo"
                          width={40}
                          height={40}
                          className={styles.genimg}
                        />
                      </button>
                      <button className={styles.newbut}>
                        {" "}
                        <Image
                          src="/images/share.png"
                          alt="logo"
                          width={40}
                          height={40}
                          className={styles.genimg}
                        />
                      </button>
                    </div>
                  </div>
                  <div className={styles.userPost}>
                    <p className={styles.userPostText}>{postData.idea}</p>
                    <Image
                      src={postData.image}
                      alt="logo"
                      width={500}
                      height={500}
                      className={styles.userPostImage}
                    />
                  </div>
                </div>
              ))
          ) : (
            <> */}
              <div className={styles.feedContainer}>
                <div className={styles.userDiv}>
                  <div className={styles.nameuserDiv}>
                    <Image
                      src="/images/man.png"
                      alt="logo"
                      width={40}
                      height={40}
                      className={styles.userimg}
                    />
                    <h2 className={styles.userName}>Sample Post</h2>
                  </div>

                  <div className={styles.butt}>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/like.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/comment.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/share.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.userPost}>
                  <p className={styles.userPostText}>Content Here </p>
                  <Image
                    src="/images/woman.jpg"
                    alt="logo"
                    width={500}
                    height={500}
                    className={styles.userPostImage}
                  />
                </div>
              </div>
              <div className={styles.feedContainer}>
                <div className={styles.userDiv}>
                  <div className={styles.nameuserDiv}>
                    <Image
                      src="/images/man.png"
                      alt="logo"
                      width={40}
                      height={40}
                      className={styles.userimg}
                    />
                    <h2 className={styles.userName}>Sample Post</h2>
                  </div>

                  <div className={styles.butt}>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/like.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/comment.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                    <button className={styles.newbut}>
                      {" "}
                      <Image
                        src="/images/share.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className={styles.genimg}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.userPost}>
                  <p className={styles.userPostText}>Content Here </p>
                  <Image
                    src="/images/fashion.jpg"
                    alt="logo"
                    width={500}
                    height={500}
                    className={styles.userPostImage}
                  />
                </div>
              </div>
            {/* </>
          )} */}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightfeedContainer}>
            <div className={styles.logincon}>
              <h1>Currently Under Construction</h1>
              <div className={logg.topbut}>
                <Image
                  src="/images/warning.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className={styles.postimg}
                />
              </div>
              <div className={logg.form}>
                <label className={logg.emlabel}>Your Ideas Here</label>
                <input
                  type="text"
                  name="idea"
                  onChange={(e) => setIdea(e.target.value)}
                  value={idea}
                />
                <label className={logg.passlabel}>Any Picture Your Wish</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                />

                {loading ? (
                  <div className={logg.loader}></div>
                ) : (
                  <button disabled={!idea && !image} onClick={onPost}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourHome;
