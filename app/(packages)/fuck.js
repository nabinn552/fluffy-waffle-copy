import { Link, Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
export default function fuck() {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          headerRight: () => {
            return (
              <View>
                <Text>fuck</Text>
              </View>
            );
          },
        }}
      />
      <Text>Packages</Text>

      <View>
        <Link href="/hell">
          <Text>hell</Text>
        </Link>
      </View>
    </View>
  );
}
