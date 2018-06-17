import React from "react";
import Button from "./Button";

import { Container, Col, ListGroupItem, Row } from "reactstrap";

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
            <img alt="{name}" src={picture} />
          </Col>
          <Col>
            <Button />
          </Col>
        </Row>
      </ListGroupItem>
    </Container>
  </div>
);

export default HeroWanted;
