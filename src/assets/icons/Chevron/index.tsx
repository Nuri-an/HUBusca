import React from 'react';

import Svg, { Polyline } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
    color: '#000000'
}

export const ChevronLeftIcon: React.FC<Props> = ({ width, height, color }) => (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Polyline points="15 18 9 12 15 6" />
    </Svg>
);