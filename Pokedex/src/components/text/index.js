import React from 'react';
import {CustomText} from './style/text';

const TextPoke = props => {
    return <CustomText size={props.font_size} paddingTop={props.paddingTop}>{props.children}</CustomText>;
};
export default TextPoke;