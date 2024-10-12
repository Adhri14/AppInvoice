import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Create from "../pages/form/Create";
import Edit from "../pages/form/Edit";

const Stack = createNativeStackNavigator();

export default function MainRouter() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    );
}