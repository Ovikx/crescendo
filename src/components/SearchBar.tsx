import { View, TextInput } from "react-native";

export const SearchBar = () => {
  return (
    <View className="rounded-full bg-blue-400 flex-row h-10 p-2 w-11/12 my-4">
      <TextInput className="h-10 flex-1" />
    </View>
  );
};
