import React from "react";
import { Container, Jumbotron,} from 'react-bootstrap';
import DonateForm from '../components/Forms/donateForm';

function Donate() {
  return (
    <div
      style={{
        margin: -24,
        backgroundImage:
          "url(" +
          "https://media.npr.org/assets/img/2018/01/09/gettyimages-901547744_wide-5be547c0dc69471823fd6808f0f83115a9db22e5-s800-c85.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 960
      }}>;
 <div>
        <Container>
          <Jumbotron style={{height: 750,
          backgroundImage: "url(" +
          "https://www.sktthemes.net/wp-content/uploads/2016/10/banner-772x250-1.png" +
          ")"}}>
          <h2 style={{ fontStyle: "Stencil Std, fantasy", fontSize:45,  }}>
              BUILDING A MOVEMENT TO END HOMELESSNESS
            </h2>
            <h3 style={{fontSize:52  }}>DONATIONS ACCEPTED!!</h3>
              <DonateForm />
          </Jumbotron>
        </Container>
      </div>
    </div>
    

  );
}

export default Donate;
