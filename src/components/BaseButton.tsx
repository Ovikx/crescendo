import { Pressable, Text } from 'react-native';

export default function Button() {
    return (
        <Pressable className='rounded-lg bg-teal-400'>
            <Text>PRESS ME</Text>
        </Pressable>
    )
}