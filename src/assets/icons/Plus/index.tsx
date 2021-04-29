import React from 'react';

import Svg, { Path, Polyline, Line } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const PlusIcon: React.FC<Props> = ({ width, height }) => (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" stroke="#8367F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Line x1="12" y1="5" x2="12" y2="19" />
        <Line x1="5" y1="12" x2="19" y2="12" />
    </Svg>
);