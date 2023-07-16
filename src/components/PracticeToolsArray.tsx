import { SafeAreaView } from "react-native-safe-area-context";
import { PracticeToolButton } from "./PracticeToolButton";

interface Props {
  placeholder?: undefined; // TODO: remove this property
}

export const PracticeToolsArray = (props: Props) => {
  const buttonColor = "slate-800";
  return (
    <SafeAreaView className="flex flex-row justify-around w-11/12 mx-auto">
      <PracticeToolButton
        bgColor={buttonColor}
        size={24}
        image="close"
        imageSize={48}
        text="Cancel"
        onPress={() => 0}
      />
      <PracticeToolButton
        bgColor={buttonColor}
        size={24}
        image="done"
        imageSize={48}
        text="Done"
        onPress={() => 0}
      />
    </SafeAreaView>
  );
};
