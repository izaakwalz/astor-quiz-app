import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import GameListItem from '../components/GameListItem';

// game data in array of objects
import gameData from '../libs/game';
//  game helper in class component
import GameHelper from '../services/Helper';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._makeLocalRequestForGameList();
  }

  _makeLocalRequestForGameList = () => {
    this.setState({loading: true});

    this.setState({error: null});
    this.setState({gameList: gameData});

    this.setState({loading: false});
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <GameListItem game={item} onPressItem={this._onPressItem} />
  );

  _onPressItem = game => {
    //  Store the selected game
    GameHelper.setActualGame(game);

    this.props.navigation.navigate('CategoryScreen', {
      game: game,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2c73d2" barStyle="light-content" />
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/images/maths.png')}
          resizeMode="cover">
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Prime Quiz</Text>
          </View>

          <FlatList
            style={styles.games}
            data={this.state.gameList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    // backgroundColor: 'rgb(230, 206, 144)',
    backgroundColor: '#FBEAFF',
  },

  games: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },

  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#0081CF',
    // borderWidth: 2,
    // borderRadius: 8,
    // borderColor: '#ffffff',
    // margin: 8,
    // marginTop: 36,
  },

  headerTitle: {
    fontWeight: '300',
    color: '#ffffff',

    fontSize: 28,
    fontWeight: '900',
  },
  game: {
    flex: 1,
    flexDirection: 'row',

    minHeight: 80,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },

  gameData: {
    flex: 1,
    padding: 20,
  },

  gameName: {
    color: '#000000',

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

    textShadowColor: '#ffffff',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 0,
  },

  gameDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});
