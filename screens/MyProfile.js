import React from "react";
import { Button, Text, View } from "react-native";
import { logUserOut } from "../apollo";
import { Container, Content, Logo } from "../components/shared";

export default function MyProfile() {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/logo.png")} />
      <Content>My Profile Page</Content>
      <Button title="Log Out" onPress={logUserOut} />
    </Container>
  );
}
