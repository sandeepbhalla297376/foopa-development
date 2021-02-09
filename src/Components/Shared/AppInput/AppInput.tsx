import React, { Component, ComponentProps, Fragment } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { ViewStyle } from 'react-native';
import { onChange } from 'react-native-reanimated';
import VisibilityToggle from 'src/Components/Shared/VisibilityToggle/VisibilityToggle'

type PropType = {
    textInputProps?: ComponentProps<typeof TextInput>;
    customProps?: any;
};

function AppInput({ textInputProps, customProps }: PropType) {

    return (
        <Fragment>
            <TextInput
                {...textInputProps}
                style={[textInputProps?.style]}
                mode={'outlined'}
                error={customProps?.error}
            />
        </Fragment>
    );
}

export default AppInput;