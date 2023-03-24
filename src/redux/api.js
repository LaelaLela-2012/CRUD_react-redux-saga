import axios from "axios";

// load
  export const loadUsersApi = async () =>
  await axios.get("http://localhost:5000/users");

  // create
  export const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);
    
  // Delete
    export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);
     
    // Update
    export const updateUserApi = async (userId, userInfo) =>
     await axios.put(`http://localhost:5000/users/${userId}`, userInfo);