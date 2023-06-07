import { useRouter } from "expo-router";
import { View, Text } from "react-native";

export default function User() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 50 }}>user section</Text>
    </View>
  );
}
