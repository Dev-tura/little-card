import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Text>
        <h1> Welcome to the Homepage</h1>
      </Text>
      <NavLink to="/about">
        <Button>GoTo About</Button>
      </NavLink>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: #ffa500;
  width: 500px;
  height: 120px;
  margin: 50px 0 0 350px;
  border-radius: 20px;
`;

const Text = styled.div`
  margin: 0 0 0 30px;
`;
const Button = styled.button`
  width: 200px;
  height: 30px;
  margin: 5px 0 0 90px;
  background-color: #fff;
  border-radius: 15px;
  border: none;
  outline: none;
`;
