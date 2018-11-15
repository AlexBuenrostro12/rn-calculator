import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Display extends React.Component {
  constructor( props ){
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          style={styles.display} >
            <Text style={styles.text}>{this.props.send}</Text>
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
    },
    display: {
      height: 150, 
      backgroundColor: 'skyblue',
      alignItems: 'flex-end',
      justifyContent: 'center',
      borderRadius: 5,
      padding: 10
    },
    text: {
      fontSize: 40
    }

});

