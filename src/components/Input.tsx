import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Text, { fontFamilyType } from './Text'
import { InputTypeProps } from '../types';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const Input = (props: Partial<InputTypeProps>) => {
    const { isVisible, onConfirm, onCancel, mode, is24Hour, minimumDate, maximumDate, date, type, label, onPress } = props;

    const onDateConfirm = (date: Date) => {
        onConfirm && onConfirm(date);
    }

    const onDateCancel = () => {
        onCancel && onCancel();
    }

    const renderInput = () => {
        switch (type) {
            case 'text-area':
                return <TextInput
                    style={[styles.input, styles.container, { verticalAlign: 'top' }, { height: 100 }]}
                    selectionColor="#D6DFFF"
                    placeholderTextColor="#777"
                    multiline
                    {...props}
                />;

            case 'date':
                return (
                    <>
                        <Pressable onPress={onPress} style={[styles.container, { height: 60, justifyContent: 'center' }]}>
                            <Text style={{ fontFamily: fontFamilyType.normal, color: props.date && typeof props.date !== 'undefined' ? '#242326' : '#777', fontSize: 16 }}>
                                {props.date && typeof props.date !== 'undefined' ? `${moment(props.date).format('dddd, DD MMMM YYYY')}` : props.placeholder}
                            </Text>
                        </Pressable>
                        {isVisible && (
                            <DateTimePickerModal
                                mode={mode || "date"} // pastikan mode diberikan
                                date={date}
                                isVisible={isVisible}
                                onConfirm={onDateConfirm}
                                onCancel={onDateCancel}
                                is24Hour={is24Hour}
                                minimumDate={minimumDate}
                                maximumDate={maximumDate}
                            />
                        )}
                    </>
                );

            default:
                return <TextInput
                    style={[styles.input, styles.container, { height: 60 }]}
                    selectionColor="#D6DFFF"
                    placeholderTextColor="#777"
                    {...props}
                />;
        }
    }

    return (
        <View style={[{ marginBottom: 16 }]}>
            <Text style={[styles.label]}>{label}</Text>
            {renderInput()}
        </View >
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F9FE',
        borderRadius: 14,
        paddingHorizontal: 20,
        position: 'relative',
        marginBottom: 20
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: fontFamilyType.normal,
        color: '#242326'
    },
    input: {
        fontSize: 16,
        fontFamily: fontFamilyType['normal'],
        color: '#242326'
    },
});