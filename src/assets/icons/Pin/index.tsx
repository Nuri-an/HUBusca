import React from 'react';

import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const PinIcon: React.FC<Props> = ({ width, height }) => (
    <Svg width={width} height={height} viewBox={`0 0 24 24`} stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <Circle cx="12" cy="10" r="3" />
    </Svg>
);