import { SafeAreaView } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";

interface Props extends SafeAreaViewProps {
  children: string | JSX.Element | JSX.Element[];
  color: string;
}

export const Card = ({ children, color }: Props) => {
  return (
    <SafeAreaView className={`${color} shadow-sm shadow-black rounded-2xl`}>
      {children}
    </SafeAreaView>
  );
};
