const clubBlocks = document.querySelectorAll('.club-block');

clubBlocks.forEach(block => {
  const button = block.querySelector('button');
  button.addEventListener('click', () => {
    const objective = block.querySelector('.objective');
    objective.style.display = objective.style.display === 'none' ? 'block' : 'none';
  });
});
$(document).ready(function(){
    $(".navbar-toggle").on("click", function(){
      $(this).toggleClass("active");
    });
  });

  // Your web app's Firebase configuration
const firebaseConfig = {
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase Realtime Database
  const database = firebase.database();
  
  // Get a reference to the Firebase Authentication service
  const auth = firebase.auth();
// Listen for changes in the user's authentication state
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      // Check if the user is an admin
      database.ref(`users/${user.uid}`).once('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData && userData.isAdmin) {
          // User is an admin, allow access to data
        } else {
          // User is not an admin, deny access to data
        }
      });
    } else {
      // User is signed out
      // Redirect to login page
      window.location.href = 'login.html';
    }
  });
    // Write data to the Firebase Realtime Database
database.ref('data').set({
    // ...
  });
  
  // Read data from the Firebase Realtime Database
  database.ref('data').once('value', (snapshot) => {
    const data = snapshot.val();
    // ...
  });
  