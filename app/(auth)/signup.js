import { View, Text, TextInput } from "react-native";
import React from "react";

import Button from "../../components/common/Button";
import { useRouter } from "expo-router";
const Signup = () => {
  const router = useRouter();
  return (
    <View className="bg-[#E9EEF2] h-full">
      <View className="h-40 w-full flex justify-center items-center ">
        <Text className="text-black translate-y-2 text-3xl">Sign Up</Text>
      </View>

      <View className=" flex justify-center  w-full h-fit  items-center">
        <TextInput
          className=" bg-[#ffffff] px-4 my-2   w-[85%] mb-4 rounded-lg py-4 focus:border-[1.5px] border-primary "
          placeholder="First name"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Last name"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Email"
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          className=" bg-[#ffffff] px-4 w-[85%] mt-2 mb-4  rounded-lg py-4 focus:border-[1.5px] border-primary"
          placeholder="Confirm password"
          secureTextEntry={true}
        />
        
        <Button ClassName="bg-[#8062F8] mt-4">Signup</Button>
      </View>

      
      <View className="flex items-center mx-4 my-6">
        <Text>
          Already have account?,{" "}
          <Text className="font-bold" onPress={() => router.push("/signin")}>
           
            Signin
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
