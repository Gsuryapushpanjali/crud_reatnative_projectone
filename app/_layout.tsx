import { Stack } from "expo-router";

const RootLayout = () => {

  return <Stack
    screenOptions={
      {
        headerStyle: {
          backgroundColor: "#f0f0f0ff",
        },
        headerTintColor: "#f0f0f0ff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold"
        },

        contentStyle: {
          paddingTop: 10,
        },
      }
  }
  >
<Stack.Screen name="index" options={{title:'Home'}}/>
  </Stack>
};
export default RootLayout;