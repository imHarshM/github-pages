import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import RepoData from "./Repository.json";

const Cards = () => {
  return (
    <Container>
      <Row>
        {RepoData &&
          RepoData.map((Repo, i) => (
            <Col sm={12} md={6} lg={4} key={i}>
              <a href={Repo.url} className="text-muted">
                <Card className="mt-4 mb-2">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      {Repo.title} <i className="fa fa-long-arrow-right text-primary"></i>
                    </Card.Title>
                    <Card.Text>{Repo.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-primary">{Repo.url}</span>
                  </Card.Footer>
                </Card>
              </a>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Cards;
