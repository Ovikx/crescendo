import { SafeAreaView, Modal, Text, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Card } from './Card';
import { Icon } from '../../assets/Images';
import BaseButton from './BaseButton';

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewItemModal = (props: Props) => {
    return (
        <Modal
            className='flex'
            animationType='fade'
            transparent={true}
            visible={props.visible}

            
            onRequestClose={() => {
                props.setVisible(false)
            }}
            >
            <SafeAreaView className='bg-black opacity-50 z-10 h-screen w-screen absolute' />
            <SafeAreaView className='flex my-auto w-11/12 mx-auto z-20'>
                
                <Card color='bg-gray-800'>
                    <SafeAreaView className='absolute top-4 right-4 p-5'>
                        <Pressable onPress={() => {
                            props.setVisible(false);
                        }}>
                            <Icon name='close' color='white' size={32} />
                        </Pressable>
                    </SafeAreaView>
                    <SafeAreaView className='mt-10 flex flex-col items-center text-center'>
                        <Text className='text-white text-2xl font-bold w-5/6 text-center'>What do you want to practice?</Text>
                        <SafeAreaView className='mx-auto'>
                            <SafeAreaView className='rounded-full bg-gray-700 flex-row h-10 p-2 w-10/12 items-center my-6'>
                                <TextInput
                                    className='h-8 flex-1 ml-4 grow'
                                    placeholder='e.g. "Sight reading", "Fur Elise", etc.'
                                    placeholderTextColor='#aaaaaa'
                                />
                            </SafeAreaView>
                        </SafeAreaView>
                        <SafeAreaView className='mb-5 flex flex-row justify-between'>
                            <SafeAreaView className='mx-5'>
                                <BaseButton color='bg-slate-900' onPress={() => {}}>
                                    <Text className='text-slate-400 font-md text-lg px-6 py-3'>Cancel</Text>
                                </BaseButton>
                            </SafeAreaView>
                            <SafeAreaView className='mx-5'>
                                <BaseButton color='bg-slate-700' onPress={() => {}}>
                                    <Text className='text-white font-md text-lg px-6 py-3'>Practice</Text>
                                </BaseButton>
                            </SafeAreaView>
                        </SafeAreaView>
                    </SafeAreaView>
                    
                </Card>
            </SafeAreaView>
        </Modal>
    )
}