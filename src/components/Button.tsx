import { ActivityIndicator, Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import Text, { fontFamilyType } from './Text';
import { ButtonTypeProps } from '../types';

const Button = ({ label, onPress, isLoading, ...props }: ButtonTypeProps) => {

    const scaleButton = useRef(new Animated.Value(1)).current;

    const onPressIn = () => {
        Animated.timing(scaleButton, {
            toValue: 0.8,
            duration: 200,
            useNativeDriver: false,
        }).start();
        setTimeout(() => {
            Animated.timing(scaleButton, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }, 250);
        onPress();
    }

    return (
        <Animated.View style={{ transform: [{ scale: scaleButton }] }}>
            <TouchableOpacity {...props} style={[styles.button]} onPress={onPressIn}>
                {isLoading && <ActivityIndicator color='white' size="small" style={{ marginRight: 10 }} />}
                <Text style={styles.textButton}>{isLoading ? 'Loading...' : label}</Text>
            </TouchableOpacity>
            <View style={styles.blur} />
        </Animated.View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: 14,
        backgroundColor: '#3461FD',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textButton: {
        fontSize: 16,
        fontFamily: fontFamilyType.bold,
        color: 'white',
    },
    blur: {
        height: 10,
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 20,
        backgroundColor: "transparent",
        zIndex: -1,
        borderRadius: 10,
        shadowColor: '#3461FD',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    }
});