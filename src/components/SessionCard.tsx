import { SafeAreaView, Text } from 'react-native';
import { Card } from './Card';

interface Props {
    name: string;
    /** In seconds */
    timeSpent: number;
}

export const SessionCard = (props: Props) => {

    const fmtSeconds = (seconds: number): string => {
        const date = new Date(seconds*1000);
        const hrStr = date.getUTCHours().toString().padStart(2, '0');
        const minStr = date.getUTCMinutes().toString().padStart(2, '0');
        const secStr = date.getUTCSeconds().toString().padStart(2, '0');
        return `${hrStr}:${minStr}:${secStr}`;
    }

    return (
        <Card color='bg-slate-800'>
            <SafeAreaView className='flex flex-row justify-between py-2 items-center'>
                <Text 
                    className='text-white font-medium text-lg ml-4 w-3/5'
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {props.name}
                </Text>
                <Text className='text-slate-400 font-normal text-md mr-4 w-2/5'>
                    {fmtSeconds(props.timeSpent)}
                </Text>
            </SafeAreaView>
        </Card>
    );
}