import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.buttonPressed}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    backgroundColor: '#8B0000',
    padding: 20,
    margin: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
