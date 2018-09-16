(function) {
  //initialize firebase
  const config = {
    apiKey: "AIzaSyAJyV8taLgT06RAcFoI74XMjc6q8H1ceKs",
    authDomain: "quizzo-b3a77.firebaseapp.com",
    databaseURL: "https://quizzo-b3a77.firebaseio.com",
    projectId: "quizzo-b3a77",
    storageBucket: "quizzo-b3a77.appspot.com",
    messagingSenderId: "129501553627"
  };

  // Get elements
  const txtEmail= document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  //Add login event
  btnLogin.addEventListener('click', e=> {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txt.Password.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

}
