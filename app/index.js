import { Redirect, useRouter } from "expo-router";
import { View, Text } from "react-native";

export default function Page() {
  const router = useRouter();

  return <Redirect href={"/home"} />;
  // return (
  //   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //     <Text style={{ fontSize: 50 }}>index</Text>
  //     <Text
  //       onPress={() => router.push("/screen1")}
  //       style={{ fontSize: 20, marginTop: 10 }}
  //     >
  //       Screen 1
  //     </Text>
  //     <Text
  //       onPress={() => router.push("/screen2")}
  //       style={{ fontSize: 20, marginTop: 10 }}
  //     >
  //       Screen 2
  //     </Text>
  //     <Text
  //       onPress={() => router.push("/screen3")}
  //       style={{ fontSize: 20, marginTop: 10 }}
  //     >
  //       Screen 3
  //     </Text>
  //   </View>
  // );
}
