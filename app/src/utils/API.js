import Axios from "axios";

export default {
  signIn(email, password){
    return Axios.post("/signin", {email, password});
  },
  signUp(email, password){
    return Axios.post("/signup", {email, password});
  }
}

