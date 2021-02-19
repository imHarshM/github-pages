import React from "react";
import { Navbar, Container } from "react-bootstrap";
import data from "./WebsiteData.json";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="px-3">
        <Navbar.Brand>{data.website.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
