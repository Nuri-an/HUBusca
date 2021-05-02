import React from 'react';
import Svg, { Path, Polyline, Line } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const TrashIcon: React.FC<Props> = ({ width, height }) => (
    <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" stroke="#EE3B66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Polyline points="3 6 5 6 21 6" />
        <Path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <Line x1="10" y1="11" x2="10" y2="17" />
        <Line x1="14" y1="11" x2="14" y2="17" />
    </Svg>
);