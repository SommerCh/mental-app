import { useState } from "react";
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();

  function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        let code = error.code;
        console.log(code);
        code = code.replaceAll("-", " ");
        code = code.replaceAll("auth/", "");
        setErrorMessage(code);
      });
  }

  function loguot(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log('jep')
    }).catch((error) => {
      console.log('jep')
    });
  }
  return (
    <div className="signin page">
      <form onSubmit={signIn}>
        <input type="email" name="mail" placeholder="Email" />
        <input type="password" name="password" placeholder="Kodeord" />
        <p className="text-error">{errorMessage}</p>
        <button className="signupbutton">Næste</button>
      </form>

      <p className="login-text">
        Har du allerede en konto?
        <Link to="/sign-up"> Log in</Link>
      </p>
    <button onClick={loguot} >log ud </button>
    </div>
  );
}
