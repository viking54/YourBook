import axios from "axios";
import toast from "react-hot-toast";


export const onLogout = async (router) => {
  
  try {
    const url = "api/users/logout";
    const response = await axios.get(url);

    toast.success(response.data.message, {
      style: { backgroundColor: "darkgreen", color: "white" },
    });

    router.push("/");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
