import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RoutesTabs } from './Tabs';

export default function Routes() {

    return (
        <NavigationContainer>
            <RoutesTabs />
        </NavigationContainer>
    );
}