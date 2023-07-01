import { Pressable, Text } from 'react-native'
import { Icon } from '../../assets/Images';

interface Props {
    size: number;
    bgColor: string;
    image: string;
    imageSize: number;
    text: string;
    onPress: () => void;
}

export const PracticeToolButton = (props: Props) => {
    return (
        <Pressable className={`rounded-full h-${props.size} w-${props.size} bg-${props.bgColor} flex flex-col items-center justify-center shadow-sm shadow-black`}
            onPress={props.onPress}>
            <Icon color='white' name={props.image} size={props.imageSize}/>
            <Text className='text-sm text-slate-300 font-bold'>{props.text}</Text>
        </Pressable>
    )
}