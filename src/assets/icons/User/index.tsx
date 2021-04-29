import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const UserIcon: React.FC<Props> = ({ width, height }) => (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" stroke="#8367F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <Circle cx="12" cy="7" r="4" />
    </Svg>
);