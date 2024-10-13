import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { CardTypeProps } from '../types';
import Text, { fontFamilyType } from './Text';
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Card = ({ children, onEdit, onDelete, onPress }: Partial<CardTypeProps>) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.wrapper}>
                <Text numberOfLines={1} fontFamily={fontFamilyType['semibold']}>{children}</Text>
                <View style={styles.containerBtn}>
                    <Pressable onPress={onEdit} style={styles.button}>
                        <EvilIcons name="pencil" size={24} color="#3461FD" />
                    </Pressable>
                    <Pressable onPress={onDelete} style={styles.button}>
                        <EvilIcons name="trash" size={24} color="#EE2737" />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerBtn: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 1,
    }
});