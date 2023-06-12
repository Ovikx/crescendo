import { Pressable, Text } from 'react-native';

interface Props {
    text: string;
    color: string;
}

export default function Button({text, color}: Props) {
    return (
        <Pressable className={`rounded-lg ${color}`}>
            <Text>{text}</Text>
        </Pressable>
    )
}