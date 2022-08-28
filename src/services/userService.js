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

const createNewUserService = (data) => {
  console.log("check data from service ", data);
  return axios.post("/api/create-new-user", data);
};

export { handleLoginApi, getAllUsers, createNewUserService };
