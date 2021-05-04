import React from 'react';

import Svg, { Path, Polyline, Line } from 'react-native-svg';

interface Props {
    width: number;
    height: number;
}

export const LinkIcon: React.FC<Props> = ({ width, height }) => (
    <Svg aria-hidden="true" width={width} height={height} viewBox="0 0 24 24" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <Polyline points="15 3 21 3 21 9" />
        <Line x1="10" y1="14" x2="21" y2="3" />
    </Svg>
);