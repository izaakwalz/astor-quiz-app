import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 1</Text>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.inner}>
          <Text>Box 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '40%',
    padding: 5,
    marginTop: 40,
    borderRadius: 20,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Category;
