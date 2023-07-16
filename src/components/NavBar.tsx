import { SafeAreaView } from "react-native";
import { NavButton } from "./NavButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
};

export const NavBar = ({ navigation }: Props) => {
  return (
    <SafeAreaView className="flex-row w-full h-16 bg-slate-800 justify-evenly shadow-md shadow-black">
      <NavButton
        label="Home"
        image="home"
        target="Home"
        navigation={navigation}
      />
      <NavButton
        label="Items"
        image="item"
        target="PracticeItems"
        navigation={navigation}
      />
      <NavButton
        label="Lists"
        image="list"
        target="PracticeLists"
        navigation={navigation}
      />
    </SafeAreaView>
  );
};
