import { useRouter, Stack } from "expo-router";
import { View, Text } from "react-native";
export default function Modal() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
          headerStyle: {
            backgroundColor: "yellow",
          },
        }}
      />
      <Text style={{ fontSize: 50 }}> Modal</Text>
    </View>
  );
}
