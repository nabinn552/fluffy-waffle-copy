import { Redirect, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Welcome from "../components/welcome/Welcome";

export default function Page() {
  const router = useRouter();
  return <Welcome />;
}
//   const router = useRouter();
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text className = "font-bold text-2xl text-red-600">Screen first welcome page</Text>
//       <View style={{ marginTop: 40 }}>
//         <TouchableOpacity
//           style={{
//             width: 200,
//             height: 50,
//             borderRadius: 10,
//             backgroundColor: "skyblue",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onPress={() => router.push("/signin")}
//         >
//           <Text>login screen</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// export default function Page() {
//   const router = useRouter();
//   return <Redirect href={"/home"} />;

// }
