import { View, Text, TextInput, Alert, Image } from "react-native";
import React from "react";
import Button from "../../components/common/Button";
import SignUpTemplate from "../../components/common/CardTemplate";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, Link } from "expo-router";

const Signin = () => {
  const router = useRouter();
  const Style = {
    textSize: "15px",
  };

  return (
    <SafeAreaView className="bg-[#E9EEF2] h-full">
      <View className="h-40 w-full flex justify-center items-center ">
        <Text className="text-black text-3xl">Sign In</Text>
      </View>
      <View className="flex justify-center flex-row">
        <SignUpTemplate>
          <Image className="h-6 w-6" source={images.google} />
          <Text className={Style.textSize}>Google</Text>
        </SignUpTemplate>
        <SignUpTemplate>
          <Image className="h-6 w-6" source={images.facebook} />

          <Text className={Style.textSize}>Facebook</Text>
        </SignUpTemplate>
      </View>

      {/* sign up container */}
      <View className=" flex justify-center  w-full h-72  items-center">
        <TextInput
          className=" bg-[#ffffff] px-4 my-2  w-[85%] m-2 rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Email"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          onPress={() => router.replace("/home")}
          ClassName="bg-primary"
          textClassName="text-white"
        >
          Signin
        </Button>
        <View className="flex items-end mx-4 px-6 w-full translate-y-4 ">
          <Text
            onPress={() => Alert.alert("hello world")}
            className="text-red-500"
          >
            Forgot Password?
          </Text>
        </View>
      </View>

      <View className="flex items-center">
        <Link href={"/SignupScreen"} asChild>
          <Button ClassName="border-[1px] border-primary mt-8 bg-white">
            Signin with phone
          </Button>
        </Link>
      </View>
      <View className="flex items-center mt-4 mx-4">
        <Text>
          Don't have account?,
          <Link href={"/signup"}>
            <Text className="font-bold"> Signup</Text>
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
