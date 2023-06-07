import { useRouter, Tabs } from "expo-router";
import { View, Text } from "react-native";
import * as Svg from "react-native-svg";
import { icons } from "../../constants";

const MenuIcon = () => {
  return (
    <View style={{ paddingLeft: 25 }}>
      <Svg.SvgXml xml={icons.menu} />
    </View>
  );
};

const UserProfile = () => {
  return (
    <View style={{ paddingRight: 25 }}>
      <Svg.SvgXml xml={icons.profileCircle} />
    </View>
  );
};
const notification = () => {
  return (
    <View>
      <Text>notification</Text>
    </View>
  );
};

const HomeIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.home} />
    </View>
  );
};
const settingIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.setting} />
    </View>
  );
};
const userIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.user} />
    </View>
  );
};

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: MenuIcon,
        headerRight: UserProfile,
        headerTitle: "",
      }}
    >
      <Tabs.Screen
        name="root"
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: userIcon,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: settingIcon,
        }}
      />
    </Tabs>
  );
};
