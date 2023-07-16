import { SafeAreaView, Pressable } from "react-native";
import { Icon } from "../../assets/Images";

interface Props {
  visible: boolean;
  onPress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FloatingAddButton = (props: Props) => {
  if (props.visible) {
    return (
      <SafeAreaView className="absolute bg-slate-700 rounded-full shadow-md">
        <Pressable className="p-5" onPress={() => props.onPress(true)}>
          <SafeAreaView className="left-1">
            <Icon name="item" size={32} color="white" />
          </SafeAreaView>
          <SafeAreaView className="absolute top-1/2 left-1/2">
            <Icon name="add" size={24} color="white" />
          </SafeAreaView>
        </Pressable>
      </SafeAreaView>
    );
  } else {
    return <SafeAreaView></SafeAreaView>;
  }
};
