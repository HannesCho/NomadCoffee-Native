import React from "react";
import Home from "../screens/Home";
import Search from "../screens/Search";
import LoggedOutNav from "./LoggedOutNav";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/TabIcon";
import LoggedInNav from "./LoggedInNav";

const Tab = createBottomTabNavigator();

export default function SharedTabNav({ isLoggedIn }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={isLoggedIn ? "LoggedInNav" : "LoggedOutNav"}
        component={isLoggedIn ? LoggedInNav : LoggedOutNav}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
