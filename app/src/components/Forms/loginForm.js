// import React from "react";
// import { Container, Button, Form, Col } from "react-bootstrap";

// function Login(props) {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <Container
//     style={{ height: 400, padding: 20 }}
//     className="d-Form"
//     {...props}
//   >
//       <Form>
//   <div className="field">
//             <label className="label" htmlFor="email">
//               Email
//             </label>
//             <input
//               placeholder="burrito@taco.com"
//               className="input"
//               name="email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               type="text"
//             />
//           </div>
//           <div className="field">
//             <label className="label" htmlFor="password">
//               Password
//             </label>
//             <input
//               placeholder="Secret Sauce"
//               className="input"
//               name="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               type="password"
//             />
//           </div>
//           <div className="has-text-right">
//             <button
//               onClick={() => props.dispatch(signin(email, password))}
//               className="button is-primary"
//             >
//               Login
//             </button>
//           </div>
//           </Container>
//   );
// }

// export default Login;
