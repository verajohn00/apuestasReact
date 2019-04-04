/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Input, Boton } from './lib';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  
  state = { 
    email: '',
    pass: '',
    adentro: false
  }

  constructor(props){
    super(props)
    this.ingresar= this.ingresar.bind(this);
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBflHILvwcQW24CdKe7scwub4fEO3YzoKk",
      authDomain: "samplei7.firebaseapp.com",
      databaseURL: "https://samplei7.firebaseio.com",
      projectId: "samplei7",
      storageBucket: "samplei7.appspot.com",
      messagingSenderId: "562161853171"
    });
  }

  ingresar(){
    const { email, pass } = this.state;
    firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(this.loginExitoso.bind(this))
      .catch(this.loginError.bind(this))
    ;
    
  }

  loginExitoso(){
    Actions.Home()
  }

  loginError(){
    this.setState({ adentro: true });
  }

  mostrarError(){
    if (this.state.adentro){
      return(
        <Text style={styles.error}>Error al iniciar sesion</Text>
      );
    }else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Apuestas App</Text>
        <Input
          texto="Correo"
          placeholder="correo"
          value={this.state.texto}
          changeText = {text => this.setState({ email: text, adentro: false })}
        />
        <Input
          texto="Constraseña"
          placeholder="constraseña"
          value={this.state.pass}
          changeText = {text => this.setState({ pass: text, adentro: false })}
        />
        { this.mostrarError() }
        <Boton 
          texto="Ingresar"
          onPress={ this.ingresar }
          style={ styles.botonStyle }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  error: {
    textAlign: 'center',
    color: '#ff0000',
    marginBottom: 5
  },
  botonStyle: {
    textAlign: 'center',
    padding: 10,
    margin: 20
  }
});

export default Login;
