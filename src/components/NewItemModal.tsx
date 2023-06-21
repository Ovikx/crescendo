import { View, SafeAreaView, Modal, Text, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Card } from './Card';
import { Icon } from '../../assets/Images';
import BaseButton from './BaseButton';
import { DB } from '../db/db';

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewItemModal = (props: Props) => {
    const onCancelPress = () => {
        props.setVisible(false);
        setInputText('');
    };

    const onSubmitPress = () => {
        if (inputText.length > 0) {
            props.setVisible(false);
            console.log(inputText);
            DB.itemsTable.insert({
                name: inputText,
                mastery: 0
            });
        }
    }
    const [inputText, setInputText] = useState('');
    
    return (
        <Modal
            className='flex shadow-2xl'
            animationType='fade'
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
                props.setVisible(false);
                setInputText('');
            }}
            >
            <SafeAreaView className='bg-black opacity-50 z-10 h-screen w-screen absolute' />
            <SafeAreaView className='flex my-auto w-11/12 mx-auto z-20'>
                
                <Card color='bg-slate-800'>
                    <View className='absolute top-0 right-0 p-5'>
                        <Pressable onPress={() => {
                            props.setVisible(false);
                            setInputText('');
                        }}>
                            <Icon name='close' color='white' size={32} />
                        </Pressable>
                    </View>
                    <SafeAreaView className='mt-10 flex flex-col items-center text-center'>
                        <Text className='text-white text-2xl font-bold w-5/6 text-center'>What do you want to practice?</Text>
                        <SafeAreaView className='mx-auto'>
                            <SafeAreaView className='rounded-xl bg-slate-700 flex-row h-14 p-2 w-10/12 items-center my-6'>
                                <TextInput
                                    clearButtonMode='unless-editing'
                                    className='h-full flex-1 ml-4 mr-2 grow text-white'
                                    placeholder='e.g. "Sight reading", "Fur Elise", etc.'
                                    placeholderTextColor='#94a3b8'
                                    onChangeText={(text) => setInputText(text)}
                                />
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView className='mb-5 flex flex-row justify-between'>
                            <SafeAreaView className='mx-3'>
                                <BaseButton color='bg-slate-900' onPress={onCancelPress}>
                                    <Text className='text-slate-400 font-md text-lg px-10 py-3'>Cancel</Text>
                                </BaseButton>
                            </SafeAreaView>
                            <SafeAreaView className='mx-3'>
                                <BaseButton color='bg-slate-700' onPress={onSubmitPress}>
                                    <Text className='text-white font-md text-lg px-10 py-3'>Practice</Text>
                                </BaseButton>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                    
                </Card>
            </SafeAreaView>
        </Modal>
    )
}