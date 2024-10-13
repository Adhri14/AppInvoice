import { StyleSheet, Text as TextRN, View } from 'react-native';
import React from 'react';
import { fontFamilyTypes, TextTypeProps } from '../types';

export const fontFamilyType: fontFamilyTypes = {
    normal: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
}

const Text = ({ fontFamily = fontFamilyType['normal'], children, ...props }: Partial<TextTypeProps>) => {
    return (
        <View>
            <TextRN style={{ fontFamily: `${fontFamily}`, color: '#232426' }} {...props}>{children}</TextRN>
        </View>
    )
}

export default Text;