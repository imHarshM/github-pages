import React, { useState } from "react";
import { Card, Row, Container, Col, OverlayTrigger, Popover } from "react-bootstrap";
import RepoData from "./Repository.json";

const Cards = () => {
  const [contentOverflowing, setContentOverflowing] = useState(false);
  const displayPopOver = (e) => {
    const el = e.target;
    const curOverf = el.style.overflow;
    if (!curOverf || curOverf === "visible") el.style.overflow = "hidden";
    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    el.style.overflow = curOverf;
    setContentOverflowing(isOverflowing);
  };
  return (
    <Container>
      <Row>
        {RepoData &&
          RepoData.map((Repo, i) => (
            <Col sm={12} md={6} lg={4} key={i}>
              <a href={Repo.url} className="d-block text-muted">
                <Card className="mt-4 mb-2">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between">
                      {Repo.title} <i className="fa fa-long-arrow-right text-primary"></i>
                    </Card.Title>
                    <OverlayTrigger
                      trigger={contentOverflowing ? ["hover", "focus"] : [""]}
                      placement="bottom"
                      overlay={
                        <Popover>
                          <Popover.Content>
                            <small>{Repo.description}</small>
                          </Popover.Content>
                        </Popover>
                      }
                    >
                      <Card.Text
                        onMouseEnter={(e) => {
                          displayPopOver(e);
                        }}
                      >
                        {Repo.description}
                      </Card.Text>
                    </OverlayTrigger>
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
