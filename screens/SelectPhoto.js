import React from "react";
import { Container, Content, Logo } from "../components/shared";

export default function SelectPhoto() {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <Content>SelectPhoto</Content>
    </Container>
  );
}
