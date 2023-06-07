import * as React from "react";
import { Circle, Rect } from "react-native-svg";
import * as Svg from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";
import { icons } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header(props) {
  return (
    <TouchableOpacity>
      <View>
        <Svg.SvgXml xml={props.iconName} />
      </View>
    </TouchableOpacity>
  );
}


