import React from 'react';
import {
  NativeModules, LayoutAnimation, Text, TouchableOpacity,
  StyleSheet, View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = { w: 200, h: 200, };

  _onPress = () => {
    LayoutAnimation.spring();
    this.setState({ w: this.state.w - 5, h: this.state.h - 5 })
  }
  _onPress1 = () => {
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 5, h: this.state.h + 5 })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress1}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pressione para aumentar o quadrado</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Pressione para diminuir o quadrado</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
