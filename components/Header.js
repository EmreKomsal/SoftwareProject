import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Title',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: '#faebd7',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default Header;
