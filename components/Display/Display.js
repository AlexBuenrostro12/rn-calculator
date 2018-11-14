import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Display extends React.Component {
  constructor( props ){
    super(props);

    this.state = {
      otroSaludo: 'Hi woman!'
    }
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.display}
          onPress={() => this.props.method(this.state.otroSaludo)} >
            <Text style={styles.text}>{this.props.hi}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    display: {
      height: 150, 
      backgroundColor: 'steelblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    text: {
      fontSize: 40
    }

});

