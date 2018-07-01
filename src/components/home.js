import React from 'react';
import { Text } from 'react-native';

class HomePage extends React.Component {
  render() {
    return (
      <Text style={styles.TextStyle}> Home page </Text>
    );
  }
}

const styles = {
  TextStyle: {
    fontSize: 20
  }
};

export default HomePage;
