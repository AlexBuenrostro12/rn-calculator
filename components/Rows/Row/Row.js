import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Row extends React.Component {
    constructor( props ) {
    super( props );
  }

  render() {
    return (
        
        <TouchableHighlight 
            style={styles.row}
            onPress={() => this.props.method(this.props.operator)} >
                <Text style={styles.text}>{this.props.operator}</Text>
        </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
  row: {
    width: 80, 
    height: 80, 
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 2,
    flexGrow: 100
  },
  text: {
    fontSize:30,
  }

});

