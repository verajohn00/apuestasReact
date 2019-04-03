import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    return(
        <TouchableOpacity onPress={props.onPress}>
            <Text> {props.texto} </Text>
        </TouchableOpacity>
    );
};

export { Boton };
