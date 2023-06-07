import React from "react";
import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as Svg from "react-native-svg";

// Define your screens for each tab
function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%", width: "100%", backgroundColor: "green" }}>
        <Text>fuck you home screen</Text>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%", width: "100%", backgroundColor: "green" }}>
        <Text>fuck you</Text>
      </View>
    </View>
  );
}

function Screen3() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%", width: "100%", backgroundColor: "green" }}>
        <Text>fuck you afs</Text>
      </View>
    </View>
  );
}

function Screen5() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "100%", width: "100%", backgroundColor: "green" }}>
        <Text>fuck you bicthc</Text>
      </View>
    </View>
  );
}

const HomeIcon = () => {
  const homeIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 18V15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  `;
  return <Svg.SvgXml xml={homeIconSvg} />;
};
const LocationIcon = () => {
  const homeIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#292D32" stroke-width="1.5"/>
  <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#292D32" stroke-width="1.5"/>
  </svg>
  
  
  `;
  return <Svg.SvgXml xml={homeIconSvg} />;
};
const AboutIcon = () => {
  const homeIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.91003 11.84C9.21003 8.51998 14.8 8.51998 19.1 11.84" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.79004 15.49C9.94004 13.05 14.05 13.05 17.2 15.49" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.40002 19.15C10.98 17.93 13.03 17.93 14.61 19.15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  
  `;
  return <Svg.SvgXml xml={homeIconSvg} />;
};
const NotifiIcon = () => {
  const homeIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.43994V9.76994" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

  
  `;
  return <Svg.SvgXml xml={homeIconSvg} />;
};
const GalleryIcon = () => {
  const homeIconSvg = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  

  
  `;
  return <Svg.SvgXml xml={homeIconSvg} />;
};

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer independent="true">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: {},
          tabBarStyle: { display: "flex" },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = <HomeIcon />;
            } else if (route.name === "Location") {
              iconName = <LocationIcon />;
            } else if (route.name === "Notification") {
              iconName = <NotifiIcon />;
            } else if (route.name === "Gallery") {
              iconName = <GalleryIcon />;
            }

            return iconName;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Location" component={SettingsScreen} />
        <Tab.Screen name="Notification" component={Screen3} />
        <Tab.Screen name="Gallery" component={Screen5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
