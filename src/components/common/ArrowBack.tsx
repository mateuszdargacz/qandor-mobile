import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ArrowBack = (props: any) => (
  <Image
    source={require('../../../assets/icons/arrow.png')}
    style={[styles.backIconStyle, props.style]}
  />
)

const styles = StyleSheet.create({
  backIconStyle: {
    marginLeft: 15,
    width: 15,
    height: 20,
  },
});
