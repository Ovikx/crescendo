import { SafeAreaView, Modal, Text } from 'react-native';
import React, { useState } from 'react';

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewItemModal = (props: Props) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
                props.setVisible(false)
            }}
            >
            <SafeAreaView>
                <Text className='p-10 text-8xl text-white'>HELLO USER!!</Text>
            </SafeAreaView>
        </Modal>
    )
}