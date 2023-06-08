import { Link } from "expo-router";
import { View, Text } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import HomeContainers from "../../../components/Gallery/HomeContainers";

export default function Page() {
  return (
    <ScrollView>
      <View>
        <HomeContainers />
        <View style={{ marginTop: 20 }}>
          <Link href="/fuck">
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "skyblue",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Packages</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
