import { SafeAreaView, Text, Pressable } from 'react-native';

type Props = {
    label: string
    // TODO: Add image field
}

export const NavButton = (props: Props) => {
    return (
        <Pressable>
            <Text className='text-white'>{props.label}</Text>
        </Pressable>
    );
}