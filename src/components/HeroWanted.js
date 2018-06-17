import React from "react";
import { Container, Button, Col, ListGroupItem, Row } from "reactstrap";

const HeroWanted = ({ name, picture, status }) => (
  <div>
    <Container>
      <ListGroupItem>
        <Row>
          <Col>
            <h3>{name}</h3>
          </Col>
          <Col>
            <p>{status}</p>
          </Col>
          <Col>
            <img className="img-fluid" alt="" src={picture} />
          </Col>
          <Col>
            <Button onClick="Alive">Kill</Button>
          </Col>
        </Row>
      </ListGroupItem>
    </Container>
  </div>
);

export default HeroWanted;
