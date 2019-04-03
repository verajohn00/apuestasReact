import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = (props) => {

    const { viewstyle, labelstyle, inputstyle } = styles;

    return(
        <View style={viewstyle}>
            <Text style={labelstyle}>{props.texto}</Text>
            <TextInput 
                placeholder={props.placeholder}
                value={props.value}
                style={inputstyle}
                onChangeText={props.changeText}
            />
        </View>
    );
}

const styles = {
    viewstyle: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelstyle: {
        fontSize: 16,
        paddingLeft: 5,
        flex: 1
    },
    inputstyle: {
        width: 100,
        height: 40,
        paddingLeft: 5,
        flex:2
    }
}

export { Input };
