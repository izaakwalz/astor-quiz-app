import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  TouchableHighlight,
} from 'react-native';

import GameHelper from '../services/Helper';

const imageCorrect = require('../../assets/images/correct.png');
const imageWrong = require('../../assets/images/wrong.png');

const QuizScreen = ({navigation}) => {
  const gameData = GameHelper.getActualGame();
  const quizData = GameHelper.getActualQuiz();
  const gamesRef = useRef();

  let actualQuizOption = -1;

  const [game, setGame] = useState(gameData);
  const [quiz, setQuiz] = useState(quizData);

  console.log(game);
  console.log(quiz);
  //   const [actualQuizOption, setActualQuizOption] = useState(-1);
  const [modalWrongVisible, setModalWrongVisible] = useState(false);
  const [modalCorrectVisible, setModalCorrectVisible] = useState(false);

  _keyExtractor = (item, index) => index;

  const moveNext = () => {
    console.log('_moveNext');
    GameHelper.updateQuizStatus(actualQuizOption);
    GameHelper.moveNextQuiz();
    if (GameHelper.isAnyQuizPending()) {
      //  Navigate to the next quiz
      navigation.navigate('QuizScreen');
    } else {
      //  Navigate to the game results
      navigation.navigate('GameResultsScreen');
    }
  };

  const checkValidAnswer = quizOption => {
    let correctAnswer = GameHelper.checkValidAnswer(quiz, quizOption);

    if (correctAnswer) {
      _setModalCorrectVisible();
    } else {
      _setModalWrongVisible();
    }
  };

  const onRequestClose = () => {
    console.log('Modal has been closed.');
    //this._hideModals();
    moveNext();
  };

  const onDismiss = () => {
    console.log('Modal has been dismissed.');
    //  Quiz answered so move to the next
    moveNext();
  };

  const onShow = () => {
    console.log('Modal has been shown.');
    //  ???????
  };

  const onPressItem = item => {
    actualQuizOption = item;
    checkValidAnswer(item);
  };

  const QuizOption = item => {
    console.log(item);
    return (
      <TouchableOpacity onPress={onPressItem}>
        <View style={styles.quizOption}>
          <Text style={styles.quizOptionDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const QuizStatus = () => {
    const image = modalCorrectVisible ? imageCorrect : imageWrong;
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalCorrectVisible || modalWrongVisible}
      onRequestClose={onRequestClose()}
      onDismiss={onDismiss()}
      onShow={onShow()}>
      <View style={styles.statusContainer}>
        <TouchableHighlight
          onPress={() => {
            //this._hideModals();
          }}>
          <Image style={styles.statusImage} source={image} />
        </TouchableHighlight>
      </View>
    </Modal>;
  };

  const _setModalCorrectVisible = () => {
    setModalCorrectVisible(true);
    setModalWrongVisible(false);
  };

  const _setModalWrongVisible = visible => {
    setModalCorrectVisible(false);
    setModalWrongVisible(true);
  };

  let actualQuizNumber = GameHelper.getActualQuizIdx() + 1;
  let totalQuizNumber = GameHelper.getQuizzes().length;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/bg.png')}
        resizeMode="cover">
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Quiz {actualQuizNumber}/{totalQuizNumber}
          </Text>
        </View>

        <View style={styles.quizDataContainer}>
          {quiz.description == '' ? (
            <Text style={styles.quizDescription}>No Rules</Text>
          ) : (
            <View style={[{backgroundColor: game.color}, styles.quizData]}>
              <Text style={styles.quizDescription}>{quiz.description}</Text>
            </View>
          )}

          <View style={[{backgroundColor: game.color}, styles.quizData]}>
            <Text style={styles.quizDescription}>{quiz.qustion}</Text>
          </View>

          <FlatList
            style={styles.quizOptions}
            data={quiz.options}
            renderItem={({item}) => QuizOption(item)}
            keyExtractor={_keyExtractor}
            onPressItem={({item}) => onPressItem(item)}
            scrollEnabled={true}
            ref={gamesRef}
          />
        </View>
      </ImageBackground>
      {QuizStatus()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'rgb(230, 206, 144)',
  },

  quizDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 16,
    marginRight: 16,
  },

  quizData: {
    padding: 16,

    marginTop: 8,
    marginBottom: 8,

    alignSelf: 'stretch',

    maxHeight: 280,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',

    justifyContent: 'center',
  },

  quizName: {
    color: '#000000',

    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 24,

    textShadowColor: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 0,
  },

  quizDescription: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },

  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#00BCD4',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    margin: 8,
    marginTop: 36,
  },

  headerTitle: {
    fontWeight: '300',
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
  },

  quizOptions: {
    width: '100%',
  },

  //  Modal status
  statusContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusImage: {
    width: 120,
    height: 120,
  },
  // quiz option
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

export default QuizScreen;
