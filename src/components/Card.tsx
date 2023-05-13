import { SafeAreaView } from "react-native";

interface Props {
    children: string | JSX.Element | JSX.Element[];
}

export const Card = ({children} : Props) => {
    return (
    <SafeAreaView className='shadow-sm shadow-black rounded-2xl bg-gray-700'>
        {children}
    </SafeAreaView>
    );
}