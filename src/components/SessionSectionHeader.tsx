import { Text } from 'react-native';

interface Props {
    title: string;
}

export const SessionSectionHeader = (props: Props) => {
    return (
        <Text className='text-white text-2xl font-bold left-9 mt-10 pb-4'>{props.title}</Text>
    )

}