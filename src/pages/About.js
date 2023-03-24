import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container>
        <div style={{ marginTop: "100px" }}>
          <MDBTypography note noteColor="primary">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </MDBTypography>
        </div>
      </Container>
    </>
  );
};

export default About;
