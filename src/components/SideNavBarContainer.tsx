import { useRef, useState } from 'react';
import { Animated, Pressable, SafeAreaView } from "react-native";
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { SideNavBar, startAnimation } from './SideNavBar';
import { Icon } from '../../assets/Images';

interface Props extends SafeAreaViewProps {
    children: string | JSX.Element | JSX.Element[];
}

export const SideNavBarContainer = ({children} : Props) => {
    const [visible, setVisible] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    
    /** Runs the animation and toggles the side bar's visible state */
    const onMenuPress = () => {
        startAnimation(animatedValue, visible)
        setVisible(!visible);
    }

    return (
        <>
            {children}
            <SafeAreaView className='absolute left-5 top-3'>
                <Pressable onPress={onMenuPress} hitSlop={5}>
                    <Icon name='menu' color='white' size={32}/>
                </Pressable>
            </SafeAreaView>
            <SideNavBar animatedValue={animatedValue} visible={visible} onOutsidePress={onMenuPress} />
        </>
    );
}