import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Row from './Row/Row';

export default class Rows extends React.Component {
    constructor( props ) {
    super( props );
    this.state = {
      rows: [
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: 'Del' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '/' },
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '*' },
        { label: '0' },
        { label: '.' },
        { label: '-' },
        { label: '+' },
        { label: '=' },
      ],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.rows.map(opr => (
            <Row
                key={opr.label}
                operator={opr.label}
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

