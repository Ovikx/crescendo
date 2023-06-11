import { SafeAreaView, Modal, Text } from 'react-native';
import React, { useState } from 'react';
import { Card } from './Card';

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
            <SafeAreaView className='flex my-auto'>
                <Card color='bg-gray-800'>
                    <Text className='p-10 text-8xl text-white'>HELLO USER!!</Text>
                </Card>
            </SafeAreaView>
        </Modal>
    )
}