import { Pressable, Text } from 'react-native';

interface Props {
    children: string | JSX.Element | JSX.Element[];
    color: string;
    onPress: () => void;
}

export default function Button({children, color, onPress}: Props) {
    return (
        <Pressable className={`rounded-full ${color}`} onPress={onPress}>
            {children}
        </Pressable>
    )
}