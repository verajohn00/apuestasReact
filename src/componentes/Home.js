import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Input, Boton } from './lib';

class Home extends Component {

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerElem}>
                    <View style={styles.container1}>
                        <Text>Hola Home1</Text>
                    </View>
                    <View style={styles.container1}>
                        <Text>Hola Home2</Text>
                    </View>
                </View>
                <View style={styles.containerElem}>
                    <View style={styles.container1}>
                        <Text>Hola Home3</Text>
                    </View>
                    <View style={styles.container1}>
                        <Text>Hola Home4</Text>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: "50%",
        backgroundColor: '#F5FCFF',
    },
    containerElem: {
        flex: 1,
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#ffffff',
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      container4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }      
  });
  
export default Home;
