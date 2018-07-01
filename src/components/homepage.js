import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';

import { onScanSubmit } from '../actions/scanActions';


const imagePath = require('../images/icon.jpg');

class HomePage extends React.Component {
  
  onScan = () => {
    this.props.onScanSubmit();
  }

  renderButton = () => {
    if (!this.props.loading) {
      return (
        <Button
        onPress={this.onScan}
        style={styles.buttonStyle} 
        rounded 
        >
          <Text style={styles.textStyle}>scan</Text>
        </Button>
      );
    }
    return (
      <Button
        style={styles.buttonStyle} 
        rounded 
      >
        <ActivityIndicator size={30} color='white' />
        <Text style={{ fontSize: 18, color: 'white' }}> scaning....</Text>
      </Button>
    );
  }

  renderScanResult = () => {
    if (this.props.scanResult !== null) {
      return (
        <Text style={styles.ResultTextStyle}> {this.props.scanResult} </Text>
      );
    }
  }

  render() {
    return (
      <View style={styles.ContainerStyle}>
        <Image style={styles.img} source={imagePath} />
        {this.renderButton()}
        {this.renderScanResult()}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  ResultTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
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

const mapStateToProps = state => (
  {
    loading: state.scanReducer.loading,
    scanResult: state.scanReducer.scanResult
  }
);

const mapDispatchToProps = dispatch => (
  {
    onScanSubmit: () => dispatch(onScanSubmit()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
