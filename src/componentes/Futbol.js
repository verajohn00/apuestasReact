import React, {Component} from 'react';
import { Text, ListView, View, StyleSheet } from 'react-native';
import Row from './Row';

class Futbol extends Component{
    
    /*state = {
        //elementos: [{'equipo1':'a','resultado':'0','equipo2':'b'}, {'equipo1':'c','resultado':'2','equipo2':'d'}]
        elementos: ['row1','row2']
    };*/

    constructor(props){
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1,r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([{'equipo1':'a','resultado':'0','equipo2':'b'}, {'equipo1':'c','resultado':'2','equipo2':'d'}]),
        };

        this.fila = this.fila.bind(this);
    }

    componentWillMount(){

    }

    fila(partido){
        return <Row partido = {partido} />
    }

    componentWillMount(){

    }

    render(){
        return(
            <ListView 
                style={styles.container}
                dataSource = {this.state.dataSource}
                renderRow={ (data) => <Text>{data.equipo1}</Text> }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      padding: 10
    },
  });

export default Futbol;
