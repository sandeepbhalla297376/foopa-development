import React from 'react'
import { Text } from 'react-native-paper'
import { TextStyle } from 'react-native'
import scaler from 'src/Utils/Shared/scaler'

type PropType = {
    children: string;
    type: 'light' | 'medium' | 'regular' | 'bold' | 'semiBold';
    fontSize: number;
    numberOfLines?: number;
    style?: TextStyle;
    color?: string;
    selectable?: boolean;
    textAlign?: 'auto' | 'left' | 'center' | 'right';
};

function AppText({
    children,
    fontSize,
    style,
    color,
    textAlign,
}: PropType) {

    return (
        <Text
            style={{
                fontSize,
                color,
                textAlign: textAlign,
                ...style,
            }}
        >
            {children}
        </Text>
    )
};

export default AppText;