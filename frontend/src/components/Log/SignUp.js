// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import Login from "./Login";

// const SignUp = () => {
//   const [formSubmit, setFormSubmit] = useState(false);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [controlPassword, setControlPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     const terms = document.getElementById("terms");
//     const usernameError = document.querySelector(".username.error");
//     const emailError = document.querySelector(".email.error");
//     const passwordError = document.querySelector(".password.error");
//     const passwordConfirmError = document.querySelector(
//       ".password-confirm.error"
//     );
//     const termsError = document.querySelector(".terms.error");

//     passwordConfirmError.innerHTML = "";
//     termsError.innerHTML = "";

//     const nameRegex = /^[a-z]{2,20}$/i;
//     let emailRegex =
//       /^[a-z0-9\-_]+[a-z0-9\.\-_]*@[a-z0-9\-_]{2,}\.[a-z\.\-_]+[a-z\-_]+$/i;
//     const usernameInput = document.getElementById("username");
//     const emailInput = document.getElementById("email");

//     usernameInput.addEventListener("change", (e) => {
//       if (nameRegex.test(e.target.value)) {
//         usernameInput.style.background = "white";
//         usernameError.innerText = "valide";
//         usernameError.style.color = "lightgreen";
//       } else {
//         usernameInput.style.background = "red";
//         usernameError.innerText = "Nom utilisateur invalide";
//         usernameError.style.color = "red";
//       }
//     });

//     emailInput.addEventListener("change", (e) => {
//       if (emailRegex.test(e.target.value)) {
//         emailInput.style.background = "white";
//         emailError.innerText = "valide";
//         emailError.style.color = "lightgreen";
//       } else {
//         emailInput.style.background = "red";
//         emailError.innerText = "Format d'Email invalide";
//         emailError.style.color = "red";
//       }
//     });

//     if (
//       password !== controlPassword ||
//       !terms.checked ||
//       usernameError.innerText === "Nom utilisateur invalide" ||
//       emailError.innerText === "Format d'Email invalide"
//     ) {
//       if (password !== controlPassword) {
//         passwordConfirmError.innerHTML =
//           "Les mots de passe ne correspondent pas";
//       }
//       if (!terms.checked) {
//         termsError.innerHTML = "Veuillez valider les conditions générales";
//       }
//     } else {
//       await axios({
//         method: "post",
//         url: `${process.env.REACT_APP_API_URL}api/users/signup`,
//         data: {
//           email,
//           password,
//           username,
//         },
//       })
//         .then((res) => {
//           console.log(res.response);
//           setFormSubmit(true);
//         })
//         .catch((err) => {
//           console.log(err.response);
//           if (err.response.data.error !== undefined) {
//             emailError.innerHTML = err.response.data.error;
//           } else {
//             emailError.innerHTML = null;
//           }
//           if (err.response.data.username !== undefined) {
//             usernameError.innerHTML = err.response.data;
//           } else {
//             usernameError.innerHTML = null;
//           }
//           if (err.response.data.passwordError !== undefined) {
//             passwordError.innerHTML = err.response.data.passwordError;
//           } else {
//             passwordError.innerHTML = null;
//           }
//         });
//     }
//   };

//   return (
//     <>
//       {formSubmit ? (
//         <>
//           <Login />
//           <h4 className="signUp_message">
//             Enregistrement réussi, veuillez-vous connecter
//           </h4>
//         </>
//       ) : (
//         <Form
//           action=""
//           onSubmit={handleSignup}
//           id="sign-up-form"
//           className="form_log"
//         >
//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Nom d'utilisateur"
//               onChange={(e) => setUsername(e.target.value)}
//               value={username}
//               id="username"
//               name="username"
//             />
//             <div className="username error"></div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="email">Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Entrez l'e-mail"
//               name="email"
//               id="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//             <div className="email error"></div>
//             <Form.Text className="text-muted">
//               Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="password">Mot de passe</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               id="password"
//               placeholder="tapez votre mot de passe"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//             <div className="password error"></div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label htmlFor="password-conf">
//               Confirmer Mot de passe
//             </Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               id="password-conf"
//               placeholder="tapez votre mot de passe"
//               onChange={(e) => setControlPassword(e.target.value)}
//               value={controlPassword}
//             />
//             <div className="password-confirm error"></div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Check type="checkbox" id="terms" />
//             <label htmlFor="terms">
//               J'accepte les{" "}
//               <a href="/" target="_blank" rel="noopener noreferrer">
//                 {" "}
//                 conditions générales
//               </a>
//             </label>
//             <div className="terms error"></div>
//           </Form.Group>

//           <Button
//             variant="outline-danger"
//             type="submit"
//             value="Valider inscription"
//             className="logBtn"
//           >
//             Valider inscription
//           </Button>
//         </Form>
//       )}
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Login from "./Login";

const SignUp = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const usernameError = document.querySelector(".username.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    const nameRegex = /^[a-z]{2,20}$/i;
    const emailRegex =
      /^[a-z0-9\-_]+[a-z0-9\.\-_]*@[a-z0-9\-_]{2,}\.[a-z\.\-_]+[a-z\-_]+$/i;

    if (!username || !email || !password || !controlPassword) {
      alert("veuillez remplir tous les champs du formulaire");
    }
    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
      }
      if (!terms.checked) {
        termsError.innerHTML = "Veuillez valider les conditions générales";
      }
    } else if (
      nameRegex.test(username) === false ||
      emailRegex.test(email) === false
    ) {
      if (nameRegex.test(username) === false) {
        console.log(nameRegex.test(username));
        usernameError.innerText = "Nom utilisateur invalide";
      } else {
        usernameError.innerText = " ";
      }
      if (emailRegex.test(email) === false) {
        console.log(emailRegex.test(email));
        emailError.innerText = "Format d'Email invalide";
      } else {
        emailError.innerText = " ";
      }
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/users/signup`,
        data: {
          email,
          password,
          username,
        },
      })
        .then((res) => {
          console.log(res.response);
          setFormSubmit(true);
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.data.error !== undefined) {
            emailError.innerHTML = err.response.data.error;
          } else {
            emailError.innerHTML = null;
          }
          if (err.response.data.username !== undefined) {
            usernameError.innerHTML = err.response.data;
          } else {
            usernameError.innerHTML = null;
          }
          if (err.response.data.passwordError !== undefined) {
            passwordError.innerHTML = err.response.data.passwordError;
          } else {
            passwordError.innerHTML = null;
          }
        });
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <h4 className="signUp_message">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <Form
          action=""
          onSubmit={handleSignup}
          id="sign-up-form"
          className="form_log"
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Nom d'utilisateur</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="username"
              name="username"
            />
            <div className="username error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez l'e-mail"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>
            <Form.Text className="text-muted">
              Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Mot de passe</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              placeholder="tapez votre mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password-conf">
              Confirmer Mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password-conf"
              placeholder="tapez votre mot de passe"
              onChange={(e) => setControlPassword(e.target.value)}
              value={controlPassword}
            />
            <div className="password-confirm error"></div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check type="checkbox" id="terms" />
            <label htmlFor="terms">
              J'accepte les{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                {" "}
                conditions générales
              </a>
            </label>
            <div className="terms error"></div>
          </Form.Group>

          <Button
            variant="outline-danger"
            type="submit"
            value="Valider inscription"
            className="logBtn"
          >
            Valider inscription
          </Button>
        </Form>
      )}
    </>
  );
};

export default SignUp;
