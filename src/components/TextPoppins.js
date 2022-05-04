import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextPoppins = (props) => {
  const styles = StyleSheet.create({
      text: {
        fontFamily: `Poppins-${props.weight}`,
        fontSize: props.size,
        color: props.color
      }
  });
  return <Text {...props} style={[props.style, styles.text]}>{props.children}</Text>;
};

export default TextPoppins;
