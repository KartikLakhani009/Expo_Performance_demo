import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default ({}) => {
  return (
    <View style={styles.bottomLoader}>
    <ActivityIndicator
        size={'large'}
        animating={true}
        color={'blue'}
    />
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 16,
    color: 'pink',
  },
  bottomLoader:{
    alignItems: 'center',
    height: 140,
    paddingTop: 20,
  }
});
