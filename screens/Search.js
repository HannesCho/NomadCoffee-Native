import React from "react";
import styled from "styled-components/native";
import { Container, Content, Logo } from "../components/shared";

export default function Search() {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <Content>Search</Content>
    </Container>
  );
}
