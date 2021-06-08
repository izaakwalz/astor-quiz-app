import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const QuizOption = () => {
  return (
    <TouchableOpacity onPress={this._onPress}>
      <View style={styles.quizOption}>
        <Text style={styles.quizOptionDescription}>
          {quizOption.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quizOption: {
    flex: 1,
    //width: '100%',
    alignSelf: 'stretch',

    minHeight: 32,

    marginTop: 4,
    marginBottom: 4,

    backgroundColor: 'rgba(64, 64, 64,0.3)',

    borderRadius: 8,
  },

  quizOptionDescription: {
    flex: 1,

    padding: 12,

    color: '#ffffff',

    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',

    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 0,
  },
});

export default QuizOption;
