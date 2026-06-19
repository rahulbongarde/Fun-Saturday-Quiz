import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHlORwIxWQAbL9WHCKQDwGHuVILQ7Zk1I",
  authDomain: "funsaturdayquiz.firebaseapp.com",
  databaseURL: "https://funsaturdayquiz-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "funsaturdayquiz",
  storageBucket: "funsaturdayquiz.firebasestorage.app",
  messagingSenderId: "153882945603",
  appId: "1:153882945603:web:c4ed05a4b4c8c290770cf6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
