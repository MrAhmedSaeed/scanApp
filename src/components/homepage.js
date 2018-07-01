import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';

const imagePath = require('../images/icon.jpg');

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.ContainerStyle}>
        <Image style={styles.img} source={imagePath} />
        <Button
        style={styles.buttonStyle} 
         rounded 
        //onPress={onPress}
        >
          <Text style={styles.textStyle}>scan</Text>
        </Button>
      </View>
    );
  }
}

const styles = {
  ContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center'
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  buttonStyle: {
    marginTop: 10,
    width: 200,
    backgroundColor: '#007aff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
    
  }
};

export default HomePage;
