import React from "react";
import { Container, Content, Logo } from "../components/shared";

export default function Home() {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <Content>Coffe Shops</Content>
    </Container>
  );
}
