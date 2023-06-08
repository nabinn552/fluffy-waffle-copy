import {
  ImageBackground,
  Image,
  SafeAreaView,
  Text,
  View,
  Alert,
} from "react-native";
import React from "react";
import Button from "../common/Button";
import { Link } from "expo-router";
import { images } from "../../constants";

const Welcome = () => {
  return (
    <SafeAreaView className="w-full  ">
      <ImageBackground
        className="w-full h-full flex flex-col justify-center  blur-sm"
        source={images.symabhu}
        resizeMode="cover"
      >
        <View className="h-[60vh] px-4 flex items-center w-full">
          <Image className="h-52 w-[50%]" source={images.logo2} />
          <Image className="h-20  w-full " source={images.logo1} />

          <View className=" w-full flex mt-8 translate-y-4  ">
            <Text className=" text-white font-bold text-2xl text-justify drop-shadow-lg  shadow-primary ">
              Start Exploring Panauti with app
            </Text>
            <Text className="text-white text-justify mt-2 drop-shadow-lg shadow-2xl ">
              Panauti Municipality warmly welcomes you! Discover the enchanting
              charm of our town and embark on an unforgettable journey of
              cultural exploration through our mobile app designed exclusively
              for tourists.
            </Text>
          </View>
          <View className="flex w-full my-10 translate-y-12 items-center">
            <Link href={"/signin"} asChild>
              <Button
                ClassName="bg-primary text-white"
                textClassName="text-white"
              >
                Explore Now
              </Button>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;
