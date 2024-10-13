import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { FloatingButtonTypeProps } from '../types';

const FloatingButton = ({ ...props }: FloatingButtonTypeProps) => {
    return (
        <Pressable style={styles.button} {...props}>
            <Ionicons name="add" color="white" size={30} />
        </Pressable>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#3461FD',
        bottom: 24,
        right: 24,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#3461FD'
    }
});