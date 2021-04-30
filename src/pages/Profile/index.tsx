import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Profile: React.FC = () => {
    return (
        <LinearGradient
            colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
            style={{ flex: 1 }}
        >
            <Text> Profile </Text>
        </LinearGradient>
    )
}