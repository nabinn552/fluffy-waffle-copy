import { Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
import * as Svg from "react-native-svg";

const profile = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const HeaderLeft = () => {
  return <Svg.SvgXml xml={profile} />;
};
export default function Screen3() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerRight: HeaderLeft
        }}
      />
      <Text style={{ fontSize: 50 }}>Screen 1</Text>
      <Text
        onPress={() => router.push("/screen1")}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO TO screen1
      </Text>
      <Text
        onPress={() => router.push("/screen2")}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO Screen2
      </Text>
      <Text
        onPress={() => router.back()}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO Back
      </Text>
      <Text
        onPress={() => router.push('/modal')}
        style={{ fontSize: 20, marginTop: 10 }}
      >
        GO TO Modal
      </Text>
    </View>
  );
}