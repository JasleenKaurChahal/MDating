import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#F7C505" />
    </View>
  );
};

export default Loading;
