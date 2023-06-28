import React from 'react';
import { Dimensions, Animated, StyleSheet, View, Pressable } from 'react-native';

interface Props {
    visible: boolean;
    animatedValue: Animated.Value;
    onOutsidePress: () => void;
}

const { height, width } = Dimensions.get('window');

export const startAnimation = (animatedValue: Animated.Value, visible: boolean) => {
    Animated.timing(animatedValue, {
        toValue: visible ? 0 : 0.75,
        duration: 500,
        useNativeDriver: true,
    }).start();
}

export const SideNavBar = ({ visible, animatedValue, onOutsidePress }: Props) => {
    const animationStyle = {
        transform: [{
            translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-width, 0]
            })
        }]
    }

    return (
        <View className='w-screen absolute'>
            <Pressable className={`${visible ? 'visible' : 'hidden'} bg-black opacity-20 h-screen w-screen`} onPress={onOutsidePress}/>
            <Animated.View style={[styles.drawer, animationStyle]}>
                
            </Animated.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        backgroundColor: '#777777',
        height: height,
        width: width,
        zIndex: 999,
        shadowColor: '#ffffff',

    }
})