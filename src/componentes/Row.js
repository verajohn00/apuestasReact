import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Row extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{props.partido.equipo1}</Text>
                <Text>{props.partido.resultado}</Text>
                <Text>{props.partido.equipo2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    }    
});

export default Row;
