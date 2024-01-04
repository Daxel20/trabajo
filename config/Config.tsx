import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDbZvu_jFmhYv08Gz5BVTpTAmgOdHkpPzA",
  authDomain: "trabajo-d6ed3.firebaseapp.com",
  databaseURL: "https://trabajo-d6ed3-default-rtdb.firebaseio.com",
  projectId: "trabajo-d6ed3",
  storageBucket: "trabajo-d6ed3.appspot.com",
  messagingSenderId: "288463129815",
  appId: "1:288463129815:web:3354ef3b2e7de082d2f492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  db = getDatabase(app)