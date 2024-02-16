<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDXTcJUVmsj71_O_yWVdvpIOsJvXdsSvDY",
    authDomain: "mineral-cell-404102.firebaseapp.com",
    databaseURL: "https://mineral-cell-404102-default-rtdb.firebaseio.com",
    projectId: "mineral-cell-404102",
    storageBucket: "mineral-cell-404102.appspot.com",
    messagingSenderId: "428067462068",
    appId: "1:428067462068:web:6f1d1933050f8145bdb0e1",
    measurementId: "G-9WVBB584BT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>