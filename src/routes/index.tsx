import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RoutesTabs } from './tabs';

export default function Routes() {

    return (
        <NavigationContainer>
            <RoutesTabs />
        </NavigationContainer>
    );
}