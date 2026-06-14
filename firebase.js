import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCTn7BHDhhT9Tdt6BQcq7WEB9Dq_7vZvpg",
    authDomain: "bmi-c-ec8ca.firebaseapp.com",
    projectId: "bmi-c-ec8ca",
    storageBucket: "bmi-c-ec8ca.firebasestorage.app",
    messagingSenderId: "609763173957",
    appId: "1:609763173957:web:176b2dbca0d49a33c4e52c",
    measurementId: "G-VT4177QMTJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  export {db}
