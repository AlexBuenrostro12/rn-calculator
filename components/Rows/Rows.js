import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Row from './Row/Row';

export default class Rows extends React.Component {
    constructor( props ) {
    super( props );
    this.state = {
      row: [
        { label: '7', operator: 7 },
        { label: '8', operator: 8 },
        { label: '9', operator: 9 },
        { label: 'Del', operator: 'Del' },
        { label: '4', operator: 4 },
        { label: '5', operator: 5 },
        { label: '6', operator: 6 },
        { label: '/', operator: '/' },
        { label: '1', operator: 1 },
        { label: '2', operator: 2 },
        { label: '3', operator: 3 },
        { label: '*', operator: '*' },
        { label: '0', operator: 0 },
        { label: '.', operator: '.' },
        { label: '-', operator: '-' },
        { label: '+', operator: '+' },
        { label: '=', operator: '=' },
      ],
    }
  }


  cambiarSaludo = ( sld ) => {
    this.setState({saludo: sld});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.row.map(opr => (
            <Row
                key={opr.label}
                operator={opr.operator}
                method={this.props.method} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent:'flex-start',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});

