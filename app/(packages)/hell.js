import { Link, useRouter } from "expo-router";
import { View, Text } from "react-native";
export default function Hell() {
  return (
    <View>
      <Link href="/modal">
        <Text>hell</Text>
      </Link>
    </View>
  );
}
