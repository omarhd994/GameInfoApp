import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import favicon from './assets/favicon.png';
import { useState, useEffect } from 'react';
import { metacritic } from './lib/metacritic';

export default function App() {
  const [games, setGames] = useState([])

  useEffect (() => {
    
    metacritic().then((games) => {
      setGames(games)
    })
  }, []);


  return (
    <View style={styles.container}>
      <Image fadeDuration={2} 
      source={favicon} style={{
        width: 100, 
        height: 100,
        }} />
      <Text style={styles.fontColor}>WELCOME!!</Text>
      <StatusBar style="light" />
      <Button color='grey' title='Appuyez ici!' onPress={() => alert('Bonjour')} />
      
      {games.map((game) => (
        <View key={game.id} style={styles.card}>
          <Image 
          source={{ uri: game.thumbnail }}
          style={{
            width: 107,
            height: 147,
            borderRadius: 10,
          }}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontColor: {
    color: '#fff'
  },
  card: {
    margin: 5,
    padding: 5,
  },
});
  