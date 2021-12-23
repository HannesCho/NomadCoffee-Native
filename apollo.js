import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");
export const darkMode = makeVar(false);

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
    ["username", JSON.stringify()],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  const keys = ["token", "loggedIn"];
  try {
    await AsyncStorage.multiRemove(keys);
    isLoggedInVar(false);
    tokenVar("");
  } catch (e) {
    console.log(e);
  }
};

export const toggleDarkMode = () => {
  console.log(darkMode);
  if (darkMode) {
    darkMode(false);
  } else {
    darkMode(true);
  }
};

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;