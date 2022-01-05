import { createStackNavigator } from "@react-navigation/stack";
import SharedTabNav from "./SharedTabNav";
import UploadNav from "./UploadNav";

const Stack = createStackNavigator();

export default function OuterStackNav() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Tabs" component={SharedTabNav} />
      <Stack.Screen name="Upload" component={UploadNav} />
    </Stack.Navigator>
  );
}
