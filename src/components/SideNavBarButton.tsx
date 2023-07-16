import { Text, Pressable, View } from "react-native";
import { Icon } from "../../assets/Images";

interface Props {
  label: string;
  image: string;
  onPress: () => void;
}

export const SideNavBarButton = (props: Props) => {
  return (
    <Pressable
      className="flex flex-row justify-start items-center py-3"
      onPress={props.onPress}
    >
      <View className="ml-5">
        <Icon color="white" name={props.image} size={32} />
      </View>
      <Text className="text-slate-100 font-medium text-xl ml-5">
        {props.label}
      </Text>
    </Pressable>
  );
};
