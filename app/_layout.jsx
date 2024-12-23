import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";

const RootLayout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          href: "/",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          href: "/explore",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          href: "/create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: "/profile",
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
{
  /* <Stack>
      <Stack.Screen name="home" />
    </Stack> */
}
