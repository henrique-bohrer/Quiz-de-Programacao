import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChvDwLCtCQv7NWyzks1GOa7uR2PFwzUPs",
  authDomain: "quizprog-ranking.firebaseapp.com",
  databaseURL: "https://quizprog-ranking-default-rtdb.firebaseio.com",
  projectId: "quizprog-ranking",
  storageBucket: "quizprog-ranking.firebasestorage.app",
  messagingSenderId: "496154461113",
  appId: "1:496154461113:web:17ae49c9b0730685482c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);