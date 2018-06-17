import React from "react";
import {
  Container,
  Button,
  Row,
  Card,
  CardTitle,
  CardImg,
  CardBody
} from "reactstrap";

const HeroWanted = ({ name, picture, status }) => {
  return (
    <Row>
      <Card>
        <CardImg alt="" src={picture} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <Button onClick="">{status}</Button>
        </CardBody>
      </Card>
    </Row>
  );
};
export default HeroWanted;
