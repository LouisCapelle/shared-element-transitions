import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhotoView, MainView } from "./src/views";
import { FakeImage } from "./src/datasets";

export type RootStackParamList = {
  MainView: undefined;
  Photo: { item: FakeImage };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainView"
            component={MainView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Photo"
            component={PhotoView}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: "blue",
              headerTitle: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
