import { useRouter, Tabs, Link } from "expo-router";
import { View, Text, Alert } from "react-native";
import * as Svg from "react-native-svg";
import { icons } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <Link href="/modal">
        <TouchableOpacity>
          <Svg.SvgXml xml={icons.profileCircle} />
        </TouchableOpacity>
      </Link>
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
const locationIcon = () => {
  return (
    <View>
      <Svg.SvgXml xml={icons.location} />
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: MenuIcon,
        headerRight: UserProfile,
        headerTitle: "",
        tabBarStyle: {
          backgroundColor: "white",
          height: 65,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: HomeIcon,
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarIcon: locationIcon,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: userIcon,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: settingIcon,
        }}
      />
    </Tabs>
  );
}
