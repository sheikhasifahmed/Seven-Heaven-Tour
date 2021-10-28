import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfigure";

const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;
