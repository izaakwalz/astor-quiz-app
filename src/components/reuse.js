/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import styled from 'styled-components';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import styled from 'styled-components';
// import {Ionicons} from 'react-native-vector-icons';
// import Text from '../components/Text';
import Category from './Category';

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar backgroundColor="#353a40" barStyle="light-content" />
      <Header>
        <Text>School Quiz</Text>
        <Text>Izaakwalz,</Text>
      </Header>
      <Category />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #353a40;
`;

const Header = styled.View`
  width: 100%;
  height: 8%;
  padding: 5px;
  justify-content: center;
  background-color: #7986cb;
`;

export default HomeScreen;

// const HomeScreen = ({navigation}) => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [seed, setSeed] = useState(1);
//   const [error, setError] = useState(null);
//   const [gameList, setGameList] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);

//   useEffect(() => {
//     makeLocalRequestForGameList();
//   }, []);

//   const makeLocalRequestForGameList = () => {
//     setLoading(true);

//     setError(null);
//     setGameList(gameData);

//     setLoading(false);
//   };

//   _keyExtractor = (item, index) => index; // react make uses of key as index to avoid key props error

//   const gamesRef = useRef();

//   // quiz category with description
//   const GameListItem = game => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           // store the selected game.
//           GameHelper.setActualGame(game),
//             // navigate to category
//             navigation.navigate('CategoryScreen', {game: game});
//         }}>
//         <View style={styles.game}>
//           <View style={[{backgroundColor: game.color}, styles.gameData]}>
//             <Text style={styles.gameName}>{game.name}</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#353a40" barStyle="light-content" />
//       <ImageBackground
//         style={styles.imageBackground}
//         source={require('../../assets/images/bg.png')}
//         resizeMode="cover">
//         <View style={styles.headerContainer}>
//           <Text style={styles.headerTitle}>Quiz App</Text>
//         </View>

//         <FlatList
//           style={styles.games}
//           data={gameList}
//           renderItem={({item}) => GameListItem(item)}
//           keyExtractor={_keyExtractor}
//           ref={gamesRef}
//         />
//       </ImageBackground>
//     </View>
//   );
// };