import { Pressable, Text } from 'react-native';

export default function Button() {
    return (
        <Pressable className='rounded-lg bg-blue-300'>
            <Text>PRESS ME</Text>
        </Pressable>
    )
}