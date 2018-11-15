import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/Display/Display'
import Rows from './components/Rows/Rows';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      operation: '',
    }
  }

  operationHandler = ( caracter ) => {
    if (caracter !== '=' && caracter !== 'Del') {
      const oldOperation = this.state.operation;
      const newOperation = oldOperation + caracter;
      this.setState({operation: newOperation});
    }

    if (caracter === 'Del') {
      const oldOperation = this.state.operation;
      const newOperation = oldOperation.slice(0, -1);
      this.setState({operation: newOperation});
    }

    if (caracter === '=') {
      try {
        const result = eval(this.state.operation);
        if (!isNaN(result))
          this.setState({operation: result.toString()});
      } catch(error) {
        this.setState({operation: 'Sysntax error!'});
      }
    }

    if (caracter === 'True')
      this.setState({operation: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <Display
          send={this.state.operation} />

        <Rows 
          style={styles.rows}
          method={this.operationHandler} />
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
    flexWrap: 'wrap',
  },

});

