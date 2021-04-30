import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../pages/Home';
import { User } from '../pages/User';

const Stack = createStackNavigator();

export const RoutesStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="User"
                component={User}
                options={{
                    header: () => null
                }}
            />
        </Stack.Navigator>
    )
}
