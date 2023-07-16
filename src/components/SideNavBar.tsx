import React from "react";
import {
  Dimensions,
  Animated,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Text,
  SafeAreaView,
} from "react-native";
import { SideNavBarButton } from "./SideNavBarButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { itemsTable, sessionsTable } from "../db/db";

interface Props {
  visible: boolean;
  animatedValue: Animated.Value;
  onOutsidePress: () => void;
}

const { height, width } = Dimensions.get("window");

export const startAnimation = (
  animatedValue: Animated.Value,
  visible: boolean,
) => {
  Animated.timing(animatedValue, {
    toValue: visible ? 0 : 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
};

export const SideNavBar = ({
  visible,
  animatedValue,
  onOutsidePress,
}: Props) => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        RootStackParamList,
        keyof RootStackParamList,
        undefined
      >
    >();

  const animationStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-width, 0],
        }),
      },
    ],
  };

  const onPagePress = (navigateCallback: () => void) => {
    navigateCallback();
    onOutsidePress();
  };

  const onDeletePress = () => {
    itemsTable.deleteTable();
    sessionsTable.deleteTable();
    itemsTable.createTable();
    sessionsTable.createTable();
  };

  return (
    <View className="w-screen absolute">
      <Pressable
        className={`${
          visible ? "visible" : "hidden"
        } bg-black opacity-20 h-screen w-screen`}
        onPress={onOutsidePress}
      />
      <Animated.View style={[styles.drawer, animationStyle]}>
        <View className="flex flex-col h-screen mt-6 w-full">
          <SafeAreaView className=" w-full border-slate-600 border-b-2">
            <Text className="text-white font-bold text-3xl text-center pb-5">
              Crescendo
            </Text>
          </SafeAreaView>
          <ScrollView className="">
            <SideNavBarButton
              image="home"
              label="Home"
              onPress={() => onPagePress(() => navigation.navigate("Home"))}
            />
            <SideNavBarButton
              image="list"
              label="Sessions"
              onPress={() => onPagePress(() => navigation.navigate("Sessions"))}
            />
            <SideNavBarButton
              image="close"
              label="Delete data"
              onPress={onDeletePress}
            />
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    backgroundColor: "#1F2937",
    height: height,
    width: width * 0.75,
    zIndex: 999,
  },
});
