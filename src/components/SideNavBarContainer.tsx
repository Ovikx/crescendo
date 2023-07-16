import { createContext, useRef, useState } from "react";
import { Animated } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import { SideNavBar, startAnimation } from "./SideNavBar";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const SideBarContext = createContext(() => {});

interface Props extends SafeAreaViewProps {
  children: string | JSX.Element | JSX.Element[];
}

export const SideNavBarContainer = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  /** Runs the animation and toggles the side bar's visible state */
  const onMenuPress = () => {
    startAnimation(animatedValue, visible);
    setVisible(!visible);
  };

  return (
    <SideBarContext.Provider value={onMenuPress}>
      {children}
      <SideNavBar
        animatedValue={animatedValue}
        visible={visible}
        onOutsidePress={onMenuPress}
      />
    </SideBarContext.Provider>
  );
};
