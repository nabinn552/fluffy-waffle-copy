import { useRouter, Tabs, Link } from "expo-router";
import { View, Text, Alert } from "react-native";
import { Stack } from "expo-router";
import * as Svg from "react-native-svg";
import { icons } from "../../../constants";
const MenuIcon = () => {
  return (
    <View style={{ paddingLeft: 10 }}>
      <Svg.SvgXml xml={icons.menu} />
    </View>
  );
};

const UserProfile = () => {
  return (
    <View style={{ paddingRight: 10 }}>
      <Svg.SvgXml xml={icons.profileCircle} />
    </View>
  );
};
export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
