import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV5HMvaJga4H_eX-8BzSfaxXTN-gVmgiE",
  authDomain: "shiroportfolio.firebaseapp.com",
  projectId: "shiroportfolio",
  storageBucket: "shiroportfolio.appspot.com",
  messagingSenderId: "434723084699",
  appId: "1:434723084699:web:c72c547b5de92f24b3693e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);