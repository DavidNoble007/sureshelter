import React from "react";
import Jumbotron from 'react-bootstrap';
function Jumbotron({ children }) {
  return (
      <Jumbotron>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
</Jumbotron>
  );
}

export default Jumbotron;