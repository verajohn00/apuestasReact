import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Input, Boton } from './lib';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

    constructor(props){
        super(props);
        this.futbol = this.futbol.bind(this);
    }

    futbol(){
        console.log("futbol");
        Actions.Login();
    }

    render(){
        return(
            <View style={styles.fullView}>
            <View style={styles.container}>
                <View style={styles.containerElem}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={ this.futbol }>
                        <Image style={styles.image} source={require('../media/balon.jpg')} />
                        <Text>Futbol</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container1}>
                        <Image style={styles.image} source={require('../media/billete.jpg')} />
                        <Text>Apuestas</Text>
                    </View>
                </View>
                <View style={styles.containerElem}>
                    <View style={styles.container1}>
                        <Image style={styles.image} source={require('../media/basquet.jpeg')} />
                        <Text>Basquetbol</Text>
                    </View>
                    <View style={styles.container1}>
                        <Image style={styles.image} source={require('../media/perfil.jpg')} />
                        <Text>Perfil</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.container2}>Botton</Text>
                <Text style={styles.container2}>Botton</Text>
                <Text style={styles.container2}>Botton</Text>
                <Text style={styles.container2}>Botton</Text>
            </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    fullView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff"
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        height: "50%",
        backgroundColor: '#F5FC00',
    },
    containerElem: {
        flex: 1,
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        width: "100%",
    },
    container1: {
        flex: 1,
        borderRadius: 10,
        borderColor: '#ff4455',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width: "100%",
        backgroundColor: '#ffffff',
      },
      image: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width: 100,
        height: 100
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
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
      },
      bottom:{
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        bottom:0,
        padding: 10,        
        height: 80,
        width: "100%",
        backgroundColor: "#e5e5e5"
      }
  });
  
export default Home;
