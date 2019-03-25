import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardHeaderTitle
} from "react-bootstrap";

import { Form, Col, Row } from 'react-bootstrap';


// function SignUp(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");

//   return (
//     <Card>
//       <CardHeader>
//         <CardHeaderTitle>Create an Account!</CardHeaderTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="field">
//           <label className="label" htmlFor="email">
//             Email
//           </label>
//           <input
//             placeholder="burrito@taco.com"
//             className="input"
//             name="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             type="text"
//           />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="password">
//             Password
//           </label>
//           <input
//             placeholder="Secret Sauce"
//             className="input"
//             name="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="rePassword">
//             Re Enter Password
//           </label>
//           <input
//             placeholder="Gotta Double Dip"
//             className="input"
//             name="rePassword"
//             value={rePassword}
//             onChange={e => setRePassword(e.target.value)}
//             type="password"
//           />
//         </div>
//         <button
//           onClick={() => {
//             if (password === rePassword) {
//               console.log("Made it");
//               props.signup(email, password);
//             }
//           }}
//           className="button is-primary"
//         >
//           Sign Up
//         </button>
//       </CardContent>
//     </Card>
//   );
// }
// export default connect(
//     null,
//     null
//   )(SignUp);

  function SignUp({ children }) {
    return (
      <Form>
    <Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
  </Form>
    );
  }
  
  export default SignUp;