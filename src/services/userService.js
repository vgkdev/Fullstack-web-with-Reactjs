import axios from "../axios";

const handleLoginApi = (useremail, userpassword) => {
  return axios.post("api/login", {
    email: useremail,
    password: userpassword,
  });
};

const getAllUsers = (inputId) => {
  //template string
  return axios.get(`api/get-all-users?id=${inputId}`);
};

export { handleLoginApi, getAllUsers };
