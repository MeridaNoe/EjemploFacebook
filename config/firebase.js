import {initializeAuth,getReactNativePersistence,} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCVg_LHbKFDcOFZFajHZ1IwhHY_7myDio",
  authDomain: "airbnb-72a0c.firebaseapp.com",
  projectId: "airbnb-72a0c",
  storageBucket: "airbnb-72a0c.appspot.com",
  messagingSenderId: "778433805532",
  appId: "1:778433805532:web:5416a7e9777e95b0b44819",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
