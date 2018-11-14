import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/Display/Display'

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      saludo: 'Hola man!',
    }
  }

  cambiarSaludo = ( sld ) => {
    this.setState({saludo: sld});
  }

  render() {
    return (
      <View style={styles.container}>
        <Display
        hi={this.state.saludo}
        method={this.cambiarSaludo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  row: {
    width: 50, 
    height: 50, 
    backgroundColor: 'powderblue',
  }

});

