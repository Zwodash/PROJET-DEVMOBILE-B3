import React from 'react';
import {Text} from 'react-native';

// -------------------------+
//                          |
//           P              |
//                          |
// -------------------------+
export const CustomText = ({children, size, paddingTop}) => {
  return (
    <Text
        style={{
        fontFamily: 'Alpha Sapphire',
        color: 'white',
        fontSize: size,
        textAlign: 'center',
        paddingTop: paddingTop,
        }}>
        {children}
    </Text>
    );
};