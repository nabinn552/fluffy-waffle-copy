import { useRouter } from "expo-router";
import { View, Text } from "react-native";
export default function Screen2() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 50 }}>Screen 1</Text>
      <Text
        onPress={() => router.push("/screen1")}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO TO screen2
      </Text>
      <Text
        onPress={() => router.back()}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO Back to where you came from
      </Text>
      <Text
        onPress={() => router.push("/screen3")}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO TO screen3
      </Text>
    </View>
  );
}
