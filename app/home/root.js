import { useRouter, Tabs } from "expo-router";
import { View, Text } from "react-native";
import * as Svg from "react-native-svg";
import { icons } from "../../constants";

export default function Root() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>panauti home section</Text>

      <View>
        <Text> hello from new update</Text>
      </View>
    </View>
  );
}
