import { SafeAreaView, ScrollView, TextInput, View } from "react-native"
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavBar } from '../components/NavBar';
import { RootStackParamList } from '../navigation/types';
import { TopBar } from '../components/TopBar';
import { Icon } from '../../assets/Images';
import { PracticeItemLight } from '../components/PracticeItemLight';
import { FloatingAddButton } from '../components/FloatingAddButton';
import { useState, useEffect } from 'react';
import { DB } from '../db/db';
import { PracticeItem } from '../types/types';
import { NewItemModal } from '../components/NewItemModal';

type Props = NativeStackScreenProps<RootStackParamList, 'PracticeItems'>;

export const PracticeItems = ({navigation}: Props) => {
    const [items, setItems] = useState<PracticeItem[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(
        () => {
            DB.itemsTable.select({}, setItems);
        },
        [modalVisible]
    );

    const practiceItems: JSX.Element[] = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        practiceItems.push(<PracticeItemLight key={i} itemName={item.name} itemType='item'/>);
    }
    return (
        <View className="bg-slate-900 flex-1">
            <TopBar label='Practice Items'>
                <SafeAreaView className='mx-auto'>
                    <SafeAreaView className='rounded-full bg-slate-700 flex-row h-10 p-2 w-11/12 my-4 items-center'>
                        <SafeAreaView className='ml-4'>
                            <Icon name='search' size={30} color='#aaaaaa'/>
                        </SafeAreaView>
                        <TextInput
                            className='h-8 flex-1 ml-4 grow'
                            placeholder='Search for practice items'
                            placeholderTextColor='#aaaaaa'
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </TopBar>
            <SafeAreaView className='flex-col items-center mt-3 flex-1 mb-20'>
                <ScrollView className='w-11/12'>
                    {practiceItems}
                </ScrollView>
            </SafeAreaView>
            <SafeAreaView className='bottom-20 right-5 h-20 w-20 absolute'>
                <FloatingAddButton onPress={setModalVisible} visible={true}/>
            </SafeAreaView>
            <NewItemModal visible={modalVisible}  setVisible={setModalVisible}/>
            <View className='bottom-0 absolute'>
                <NavBar navigation={navigation}/>
            </View>
        </View>
    );
}