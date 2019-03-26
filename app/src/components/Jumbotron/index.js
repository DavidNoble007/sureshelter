import React from "react";
import { Jumbotron, Grid } from 'react-bootstrap';

function Jumbotron({ children }) {
  return (
    <Jumbotron>
      <Grid>
        <h1>Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      </Grid>
    </Jumbotron>
  );
}

export default Jumbotron;