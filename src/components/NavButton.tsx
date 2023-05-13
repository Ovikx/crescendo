import { SafeAreaView, Text, Pressable, Image } from 'react-native';
import { home, item, list } from '../../assets/Images';

type Props = {
    label: string;
    image: any;
}

export const NavButton = (props: Props) => {
    return (
        <Pressable>
            <SafeAreaView className='flex-col justify-center top-2'>
                <Image source={props.image} className='h-10 w-10'></Image>
                <Text className='text-white'>{props.label}</Text>
            </SafeAreaView>
        </Pressable>
    );
}