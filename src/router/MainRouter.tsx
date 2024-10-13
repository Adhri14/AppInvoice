import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Create from "../pages/form/Create";
import Edit from "../pages/form/Edit";
import { StyleSheet, Text, View } from "react-native";
import { fontFamilyType } from "../components/Text";

const Stack = createNativeStackNavigator();

export default function MainRouter() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleStyle: {
                fontFamily: fontFamilyType['bold'],
                fontSize: 16,
                color: '#242326'
            },
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="Beranda" component={Home} />
            <Stack.Screen name="Tambah" component={Create} />
            <Stack.Screen name="Ubah" component={Edit} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    headerText: {
        fontSize: 16,
        color: '#232426',
        textTransform: 'uppercase',
        fontFamily: 'Poppins-Bold'
    }
});