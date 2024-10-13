import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsWithChildren } from "react";
import { PressableProps, TextInputProps, TextProps, TouchableOpacityProps } from "react-native";
import { DateTimePickerProps } from "react-native-modal-datetime-picker";

export interface fontFamilyTypes {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
}

export interface TextTypeProps extends TextProps, PropsWithChildren {
    fontFamily: string | fontFamilyTypes;
}

export interface CardTypeProps extends PropsWithChildren {
    onDelete?: () => void;
    onEdit?: () => void;
    onPress?: () => void;
}

export interface FloatingButtonTypeProps extends PressableProps {

}

export type listTypeInput = 'text' | 'text-area' | 'date';
export interface InputTypeProps extends TextInputProps, Pick<DateTimePickerProps, 'isVisible' | 'onConfirm' | 'onCancel' | 'mode' | 'is24Hour' | 'minimumDate' | 'maximumDate' | 'date'> {
    label?: string;
    type?: listTypeInput;
    onPress?: () => void;
}

export interface ButtonTypeProps extends TouchableOpacityProps {
    label: string;
    onPress: () => void;
    isLoading?: boolean;
}

// export interface HomeScreenType extends NativeStackScreenProps<ParamListBase, "Beranda"> { };
// export interface CreateScreenType extends NativeStackScreenProps<ParamListBase, "Tambah"> { };
// export interface EditScreenType extends NativeStackScreenProps<ParamListBase, "Ubah"> { };

export type HomeScreenType = NativeStackScreenProps<ParamListBase, "Beranda">;
export type CreateScreenType = NativeStackScreenProps<ParamListBase, "Beranda">;
export type EditScreenType = NativeStackScreenProps<ParamListBase, "Beranda">;