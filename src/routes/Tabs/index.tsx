import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PlusPost } from '../../pages/PlusPost';
import { Profile } from '../../pages/Profile';
import { HomeIcon, PlusIcon, UserIcon } from '../../assets/icons';
import { Typogaphy, ButtonPlus } from './styles';

import { RoutesStack } from '../Stack';
import { Keyboard } from 'react-native';

const Tab = createBottomTabNavigator();

export const RoutesTabs: React.FC = () => {

    const [keyboardStatus, setKeyboardStatus] = useState(false); //Guarda o estado do teclado. Caso esteja esteja visível recebe ture, caso estaja invisível recebe false

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(true));
        Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(false));

        return () => {
            Keyboard.removeListener("keyboardDidShow", () => setKeyboardStatus(true));
            Keyboard.removeListener("keyboardDidHide", () => setKeyboardStatus(false));
        };
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => { //Customiza os ícones dos botões Home e Meus Posts

                    if (route.name === 'Home') {
                        return (
                            <HomeIcon
                                width={size}
                                height={size}
                                color={color == '#8367F6' ? '#8367F6' : '#0057FF'}
                            />
                        )
                    } else if (route.name === 'Profile') {
                        return (
                            <UserIcon
                                width={size}
                                height={size}
                                color={color == '#8367F6' ? '#8367F6' : '#0057FF'}
                            />
                        )
                    }
                },
                tabBarLabel: ({ focused, color }) => { //Customiza os labels dos botões Home e Meus Posts
                    return (
                        <Typogaphy color={color} focused={focused}>
                            {
                                route.name === 'Home'
                                    ? 'Home'
                                    : route.name === 'Profile'
                                        ? 'Meus Posts'
                                        : ''
                            }
                        </Typogaphy>
                    )
                },
            })}
            tabBarOptions={{ //Customiza toda barra
                keyboardHidesTabBar: true,
                activeTintColor: '#8367F6',
                inactiveTintColor: '#0057FF',
                style: {
                    position: 'absolute',
                    marginBottom: 5,
                    marginRight: 20,
                    borderBottomEndRadius: 20,
                    shadowColor: '#000',
                    paddingVertical: 5,
                    height: 60,
                }
            }}
        >
            <Tab.Screen name="Home" component={RoutesStack} />
            <Tab.Screen
                name="Plus"
                component={PlusPost}
                options={{
                    tabBarIcon: ({ color, size }) => { //Customiza o ícone do botão Plus. Invisível caso o teclado esteja visível e vice-versa
                        if (keyboardStatus) {
                            return
                        } else {
                            return (
                                <ButtonPlus color={color} >
                                    <PlusIcon
                                        width={size * 1.5}
                                        height={size * 1.5}
                                        color={'#FFFFFF'}
                                    />
                                </ButtonPlus>
                            )
                        }
                    },
                }}
            />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}