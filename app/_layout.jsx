import { Stack } from "expo-router";

const RootLayout = () => {

  return <Stack
    screenOptions={
      {
        headerStyle: {
          backgroundColor: "#f0f0f0ff",
        },
        headerTintColor: "#3fbb2cff",
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

<Stack.Screen name="notes" options={{headerTitle:'Notes'}}/>
  </Stack>

};
export default RootLayout;