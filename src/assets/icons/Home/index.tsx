import React from 'react';

import Svg, { Path, Polyline } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const HomeIcon: React.FC<Props> = ({ width, height }) => (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" stroke="#8367F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Polyline points="9 22 9 12 15 12 15 22" />
    </Svg>
);